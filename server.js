const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'vakundo-admin-secret';
const ROOT = __dirname;
const USERS_FILE = path.join(ROOT, 'data', 'users.json');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

function readUsers() {
  return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function isAuthorized(req) {
  const authHeader = req.headers.authorization || '';
  return authHeader === `Bearer ${ADMIN_TOKEN}`;
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
  });
}

function handleApi(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/config' && req.method === 'GET') {
    return sendJson(res, 200, { demoAdminToken: ADMIN_TOKEN });
  }

  if (!isAuthorized(req)) {
    return sendJson(res, 401, { error: 'Unauthorized. Provide Bearer token.' });
  }

  if (url.pathname === '/api/users' && req.method === 'GET') {
    return sendJson(res, 200, readUsers());
  }

  if (url.pathname === '/api/users' && req.method === 'POST') {
    return parseBody(req)
      .then(body => {
        if (!body.name || !body.email || !body.role) {
          return sendJson(res, 400, { error: 'name, email, and role are required' });
        }

        const users = readUsers();
        const nextId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
        const user = {
          id: nextId,
          name: body.name,
          email: body.email,
          role: body.role,
          active: body.active !== false
        };
        users.push(user);
        writeUsers(users);
        sendJson(res, 201, user);
      })
      .catch(err => sendJson(res, 400, { error: err.message }));
  }

  const userMatch = url.pathname.match(/^\/api\/users\/(\d+)$/);
  if (userMatch && req.method === 'PUT') {
    const userId = Number(userMatch[1]);
    return parseBody(req)
      .then(body => {
        const users = readUsers();
        const index = users.findIndex(u => u.id === userId);
        if (index === -1) return sendJson(res, 404, { error: 'User not found' });

        users[index] = { ...users[index], ...body, id: userId };
        writeUsers(users);
        sendJson(res, 200, users[index]);
      })
      .catch(err => sendJson(res, 400, { error: err.message }));
  }

  if (userMatch && req.method === 'DELETE') {
    const userId = Number(userMatch[1]);
    const users = readUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) return sendJson(res, 404, { error: 'User not found' });

    const removed = users.splice(index, 1)[0];
    writeUsers(users);
    return sendJson(res, 200, removed);
  }

  return sendJson(res, 404, { error: 'API route not found' });
}

function serveStatic(req, res) {
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(ROOT, decodeURIComponent(urlPath));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404);
      return res.end('Not Found');
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/')) {
    return handleApi(req, res);
  }
  return serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Vakundo FC server running on http://localhost:${PORT}`);
});

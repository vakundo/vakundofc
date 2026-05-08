const tokenInput = document.getElementById('token');
const connectBtn = document.getElementById('connect');
const usersEl = document.getElementById('users');
const hint = document.getElementById('hint');

const newName = document.getElementById('newName');
const newEmail = document.getElementById('newEmail');
const newRole = document.getElementById('newRole');
const addUserBtn = document.getElementById('addUser');

let token = localStorage.getItem('adminToken') || '';
tokenInput.value = token;

function headers() {
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
}

async function fetchConfig() {
  const response = await fetch('/api/config');
  const data = await response.json();
  hint.textContent = `Demo token: ${data.demoAdminToken}`;
}

async function loadUsers() {
  const response = await fetch('/api/users', { headers: headers() });
  if (!response.ok) {
    usersEl.innerHTML = '<p>Unauthorized or failed to load users.</p>';
    return;
  }

  const users = await response.json();
  usersEl.innerHTML = '';

  users.forEach(user => {
    const row = document.createElement('div');
    row.className = 'admin-row';
    row.innerHTML = `
      <input value="${user.name}" data-field="name" />
      <input value="${user.email}" data-field="email" />
      <select data-field="role">
        <option ${user.role === 'user' ? 'selected' : ''}>user</option>
        <option ${user.role === 'manager' ? 'selected' : ''}>manager</option>
        <option ${user.role === 'admin' ? 'selected' : ''}>admin</option>
      </select>
      <div>
        <button class="primary">Save</button>
        <button class="danger">Delete</button>
      </div>
    `;

    const [saveBtn, deleteBtn] = row.querySelectorAll('button');
    saveBtn.addEventListener('click', async () => {
      const inputs = row.querySelectorAll('[data-field]');
      const payload = {};
      inputs.forEach(i => payload[i.dataset.field] = i.value);

      await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(payload)
      });

      loadUsers();
    });

    deleteBtn.addEventListener('click', async () => {
      await fetch(`/api/users/${user.id}`, { method: 'DELETE', headers: headers() });
      loadUsers();
    });

    usersEl.appendChild(row);
  });
}

connectBtn.addEventListener('click', () => {
  token = tokenInput.value.trim();
  localStorage.setItem('adminToken', token);
  loadUsers();
});

addUserBtn.addEventListener('click', async () => {
  await fetch('/api/users', {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ name: newName.value, email: newEmail.value, role: newRole.value })
  });

  newName.value = '';
  newEmail.value = '';
  newRole.value = 'user';
  loadUsers();
});

fetchConfig();
if (token) loadUsers();

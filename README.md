# vakundofc

Official Page of Vakundo FC

## Run locally

```bash
npm start
```

Open `http://localhost:3000` for the main site.

## Admin dashboard

Open `http://localhost:3000/admin.html`.

A simple backend API is now included for user management.

- `GET /api/users` - list users
- `POST /api/users` - add user
- `PUT /api/users/:id` - update user
- `DELETE /api/users/:id` - delete user

Use Bearer token auth. Default token:

`vakundo-admin-secret`

Set a custom token with:

```bash
ADMIN_TOKEN=your-token npm start
```

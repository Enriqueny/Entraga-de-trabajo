const USERS_DB = [
  { id: 1, email: 'super1@admin.com', password: 'super123', name: 'Carlos Superusuario', role: 'superuser' },
  { id: 2, email: 'super2@admin.com', password: 'super123', name: 'María Superusuario', role: 'superuser' },
  { id: 3, email: 'admin1@system.com', password: 'admin123', name: 'Juan Administrador', role: 'admin' },
  { id: 4, email: 'admin2@system.com', password: 'admin123', name: 'Ana Administrador', role: 'admin' },
  { id: 5, email: 'user1@system.com', password: 'user123', name: 'Pedro Usuario', role: 'user' },
  { id: 6, email: 'user2@system.com', password: 'user123', name: 'Laura Usuario', role: 'user' },
];

async function authenticateUser(email, password) {
  const user = USERS_DB.find(u => u.email === email && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}
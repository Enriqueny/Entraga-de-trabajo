function LoginForm() {
  try {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');

      const user = await authenticateUser(email, password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
      } else {
        setError('Credenciales incorrectas');
      }
    };

    return (
      <div className="min-h-screen flex" data-name="login-form" data-file="components/LoginForm.js">
        <div className="w-1/2 bg-black flex items-center justify-center p-12">
          <div className="text-white max-w-md">
            <h1 className="text-5xl font-bold mb-4">Sistema de</h1>
            <h1 className="text-5xl font-bold mb-6">Administración</h1>
            <p className="text-gray-400 text-lg">Control de versiones y gestión de roles de usuario</p>
          </div>
        </div>

        <div className="w-1/2 bg-white flex items-center justify-center p-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2 text-black">Iniciar Sesión</h2>
            <p className="text-gray-600 mb-8">Ingrese sus credenciales para acceder</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="usuario@ejemplo.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
              >
                Ingresar
              </button>
            </form>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-semibold text-gray-700 mb-2">Usuarios de prueba:</p>
              <p className="text-xs text-gray-600">Super: super@admin.com / super123</p>
              <p className="text-xs text-gray-600">Admin: admin@system.com / admin123</p>
              <p className="text-xs text-gray-600">User: user@system.com / user123</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}
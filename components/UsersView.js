function UsersView() {
  try {
    const users = [
      { id: 1, name: 'Carlos Superusuario', email: 'super1@admin.com', role: 'Superusuario', status: 'Activo' },
      { id: 2, name: 'María Superusuario', email: 'super2@admin.com', role: 'Superusuario', status: 'Activo' },
      { id: 3, name: 'Juan Administrador', email: 'admin1@system.com', role: 'Administrador', status: 'Activo' },
      { id: 4, name: 'Ana Administrador', email: 'admin2@system.com', role: 'Administrador', status: 'Activo' },
      { id: 5, name: 'Pedro Usuario', email: 'user1@system.com', role: 'Usuario', status: 'Activo' },
      { id: 6, name: 'Laura Usuario', email: 'user2@system.com', role: 'Usuario', status: 'Inactivo' },
    ];

    return (
      <div data-name="users-view" data-file="components/UsersView.js">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Usuarios</h1>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 flex items-center space-x-2">
            <div className="icon-plus text-lg"></div>
            <span>Nuevo Usuario</span>
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rol</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-gray-600 hover:text-gray-900">
                        <div className="icon-edit-2 text-lg"></div>
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <div className="icon-trash-2 text-lg"></div>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UsersView component error:', error);
    return null;
  }
}
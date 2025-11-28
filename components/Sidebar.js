function Sidebar({ currentView, onNavigate }) {
  try {
    const menuItems = [
      { id: 'dashboard', icon: 'layout-dashboard', label: 'Dashboard' },
      { id: 'users', icon: 'users', label: 'Usuarios' },
      { id: 'config', icon: 'settings', label: 'Configuración' },
      { id: 'reports', icon: 'file-text', label: 'Reportes' },
    ];

    return (
      <div className="w-[280px] bg-black text-white flex flex-col" data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <div className="icon-shield text-xl text-black"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold">Admin System</h1>
              <p className="text-xs text-gray-400">v2.0</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                currentView === item.id
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:bg-gray-900'
              }`}
            >
              <div className={`icon-${item.icon} text-lg`}></div>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">© 2025 Admin System</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}
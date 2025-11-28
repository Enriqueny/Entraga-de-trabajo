function ConfigView() {
  try {
    const configSections = [
      { icon: 'shield', title: 'Seguridad', description: 'Configurar autenticación y permisos' },
      { icon: 'mail', title: 'Notificaciones', description: 'Gestionar alertas y correos' },
      { icon: 'database', title: 'Base de Datos', description: 'Configuración de almacenamiento' },
      { icon: 'globe', title: 'General', description: 'Configuraciones generales del sistema' },
    ];

    return (
      <div data-name="config-view" data-file="components/ConfigView.js">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Configuración</h1>

        <div className="grid grid-cols-2 gap-6">
          {configSections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <div className={`icon-${section.icon} text-xl text-gray-700`}></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{section.description}</p>
              <button className="text-sm text-black font-medium hover:underline">
                Configurar →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Información del Sistema</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Versión</span>
              <span className="font-medium">2.0.1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Última actualización</span>
              <span className="font-medium">15 Nov 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Base de datos</span>
              <span className="font-medium text-green-600">Conectada</span>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ConfigView component error:', error);
    return null;
  }
}

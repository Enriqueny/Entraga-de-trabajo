function ReportsView() {
  try {
    const reports = [
      { 
        id: 1, 
        title: 'Reporte de Usuarios Activos', 
        date: '20 Nov 2025', 
        status: 'Completado',
        icon: 'users',
        color: 'bg-blue-500'
      },
      { 
        id: 2, 
        title: 'Análisis de Actividad Mensual', 
        date: '18 Nov 2025', 
        status: 'Completado',
        icon: 'chart-bar',
        color: 'bg-green-500'
      },
      { 
        id: 3, 
        title: 'Reporte de Seguridad', 
        date: '15 Nov 2025', 
        status: 'Pendiente',
        icon: 'shield',
        color: 'bg-orange-500'
      },
      { 
        id: 4, 
        title: 'Auditoría del Sistema', 
        date: '12 Nov 2025', 
        status: 'Completado',
        icon: 'file-check',
        color: 'bg-purple-500'
      },
    ];

    return (
      <div data-name="reports-view" data-file="components/ReportsView.js">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Reportes</h1>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 flex items-center space-x-2">
            <div className="icon-plus text-lg"></div>
            <span>Nuevo Reporte</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {reports.map(report => (
            <div key={report.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${report.color} bg-opacity-10 flex items-center justify-center`}>
                  <div className={`icon-${report.icon} text-xl`} style={{ color: report.color.replace('bg-', '') }}></div>
                </div>
                <span className={`px-3 py-1 text-xs rounded-full ${
                  report.status === 'Completado' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{report.date}</p>
              <div className="flex space-x-2">
                <button className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 text-sm">
                  Ver Reporte
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <div className="icon-download text-lg text-gray-700"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ReportsView component error:', error);
    return null;
  }
}
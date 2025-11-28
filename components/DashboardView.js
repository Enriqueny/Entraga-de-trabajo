function DashboardView() {
  try {
    const chartRef1 = React.useRef(null);
    const chartRef2 = React.useRef(null);

    React.useEffect(() => {
      const ChartJS = window.Chart;

      if (chartRef1.current) {
        const ctx1 = chartRef1.current.getContext('2d');
        new ChartJS(ctx1, {
          type: 'line',
          data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
              label: 'Usuarios Activos',
              data: [12, 19, 15, 25, 22, 30],
              borderColor: '#000000',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              tension: 0.4
            }]
          },
          options: { responsive: true, plugins: { legend: { display: false } } }
        });
      }

      if (chartRef2.current) {
        const ctx2 = chartRef2.current.getContext('2d');
        new ChartJS(ctx2, {
          type: 'bar',
          data: {
            labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
            datasets: [{
              label: 'Actividad',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: '#000000'
            }]
          },
          options: { responsive: true, plugins: { legend: { display: false } } }
        });
      }
    }, []);

    const stats = [
      { icon: 'users', label: 'Total Usuarios', value: '1,248', change: '+12%', color: 'bg-blue-500' },
      { icon: 'activity', label: 'Actividad Hoy', value: '856', change: '+5%', color: 'bg-green-500' },
      { icon: 'file-text', label: 'Reportes', value: '42', change: '+8%', color: 'bg-purple-500' },
      { icon: 'trending-up', label: 'Crecimiento', value: '23%', change: '+3%', color: 'bg-orange-500' },
    ];

    return (
      <div data-name="dashboard-view" data-file="components/DashboardView.js">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

        <div className="grid grid-cols-4 gap-6 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                  <div className={`icon-${stat.icon} text-xl`} style={{ color: stat.color.replace('bg-', '') }}></div>
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Usuarios Activos</h3>
            <canvas ref={chartRef1}></canvas>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Actividad Semanal</h3>
            <canvas ref={chartRef2}></canvas>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardView component error:', error);
    return null;
  }
}
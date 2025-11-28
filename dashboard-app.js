class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-black text-white rounded">
              Recargar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [currentView, setCurrentView] = React.useState('dashboard');
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      const currentUser = getCurrentUser();
      if (!currentUser) {
        window.location.href = 'index.html';
      } else {
        setUser(currentUser);
      }
    }, []);

    if (!user) return null;

    return (
      <div className="flex h-screen bg-gray-50" data-name="dashboard-app" data-file="dashboard-app.js">
        <Sidebar currentView={currentView} onNavigate={setCurrentView} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar user={user} />
          <main className="flex-1 overflow-y-auto p-6">
            {currentView === 'dashboard' && <DashboardView />}
            {currentView === 'users' && <UsersView />}
            {currentView === 'config' && <ConfigView />}
            {currentView === 'reports' && <ReportsView />}
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);
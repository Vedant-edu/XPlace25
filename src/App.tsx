import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PlacementDashboard } from './components/dashboard/PlacementDashboard';
import { ThemeProvider } from './components/ui/theme-provider';
import CompaniesVisited from './components/ui/CompaniesVisited';


function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<PlacementDashboard />} />
        <Route path="/companies-visited" element={<CompaniesVisited />} />

      </Routes>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          className: 'bg-background text-foreground',
          style: {
            border: '1px solid var(--border)',
            padding: '16px',
            color: 'var(--foreground)',
          },
        }}
      />
    </div>
    </ThemeProvider>
  );
}

export default App;

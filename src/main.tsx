5b0ace67fa7b66a67cc2e247cb1bd97c118f28a3
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="xplace-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

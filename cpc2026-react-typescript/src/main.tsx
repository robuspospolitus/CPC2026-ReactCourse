import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './styles/styles.css';
import { ExpenseProvider } from './context/ExpenseContext.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Stats from './components/Stats.js';
import Logo from './assets/logo.png';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ExpenseProvider to od naszego kontekstu, abyśmy mieli dostęp do jego zmiennych */}
    <ExpenseProvider>
      {/* BrowserRouter to blok któy zarządza adresami URL */}
      <BrowserRouter>
        <nav className='navbar'>
          <div className="nav-logo">
            <img height={64} src={Logo} alt="" />
          </div>
          <div className="nav-links">
            <Link to="/">Portfel</Link>
            <Link to="/stats">Statystyki</Link>
          </div>
        </nav>
        
        {/* Tutaj tworzymy nasze ścieżki. Ten fragment nie jest widoczny na stronie */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  </StrictMode>,
)

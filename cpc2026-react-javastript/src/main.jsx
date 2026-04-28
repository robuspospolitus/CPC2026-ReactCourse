import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.css';
import { ExpenseProvider } from './context/ExpenseContext.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Stats from './components/Stats.jsx';
import Logo from './assets/logo.png';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseProvider>
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
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  </StrictMode>,
)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import HomePage  from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { useState } from 'react';
import { authService } from './services/authService';
import LoginPage from './pages/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin}/>
  }

  return (
    <Router>
      <div id='App' className="min-h-screen flex bg-gray-800">
        <header className='w-64 !border-r-[0.1px] !border-white min-h-screen' 
                style={{borderRightWidth: '0.1px', borderRightStyle: 'solid', borderRightColor: 'white'}}>
          <SideBar onLogout={handleLogout}/>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

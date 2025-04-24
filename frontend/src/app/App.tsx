import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import Dashboard from '../pages/dashboard/dashboard.tsx';
import Login from '../pages/login/login.tsx';
import "@radix-ui/themes/styles.css";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth');

    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    setIsAuthenticated(true);
  };

  return (
    <Router> <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes> </Router>
  );
}

export default App;

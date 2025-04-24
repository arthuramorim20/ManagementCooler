import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from '../login/login.tsx';
import * as Toast from '@radix-ui/react-toast';
import "@radix-ui/themes/styles.css";


function Dashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('auth');
        if (auth === 'true') setIsAuthenticated(true);
    }, []);

    const handleLogin = () => {
        localStorage.setItem('auth', 'true');
        setIsAuthenticated(true);
        setShowToast(true);
    };

    return (
        <Toast.Provider swipeDirection="right">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route
                        path="/dashboard"
                        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
                    />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Router>

            <Toast.Root
                className="bg-green-500 text-white px-4 py-2 rounded shadow-md"
                open={showToast}
                onOpenChange={setShowToast}
            >
                <Toast.Title className="font-bold">Login realizado com sucesso!</Toast.Title>
                <Toast.Description className="text-sm">Bem-vindo à dashboard.</Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="fixed bottom-4 right-4 z-50" />
        </Toast.Provider>
    );
}

export default Dashboard;

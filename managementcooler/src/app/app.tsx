import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../components/auth/AuthProvider";
import Login from "../components/auth/Login";
import Register from "../components/auth/SignUp";
import Home from "../components/ArcondicionadoList";
import type { JSX } from "react";

function PrivateRoute({ children }: { children: JSX.Element }) {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
}

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

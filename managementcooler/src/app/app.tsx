import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../components/auth/AuthProvider";
import { useEffect, useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/SignUp";
import Home from "../components/ArcondicionadoList";
// import RoleRoute from "../components/auth/RoleRoute";
// import AdminDashboard from "../components/ArcondicionadoList";
import type { JSX } from "react";
import { supabase } from "../lib/supabaseClient";



function PrivateRoute({ children }: { children: JSX.Element }) {
    const { user, loading } = useAuth();
    if (loading) return 
    else return user ? children : <Navigate to="/login" />;
}

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [ loading, setLoading ] = useState(true);


    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();

            if (data.session) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }

            setLoading(false);
            console.log(isAuthenticated)
        };

        checkSession().catch((error) => {
            console.error("Error checking session:", error);
            setLoading(false);
        });


    });

    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                        <Route path="*"
                            element={<PrivateRoute><Home /></PrivateRoute>} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

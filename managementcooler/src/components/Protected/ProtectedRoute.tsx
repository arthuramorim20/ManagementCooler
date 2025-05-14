// src/components/ProtectedRoute.tsx
import type { JSX } from 'react';
import { useRole } from '../../hooks/useRole';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ roleRequired, children }: { roleRequired: string, children: JSX.Element }) {
    const role = useRole()

    if (role === null) return <p>Carregando...</p>
    if (role !== roleRequired) return <Navigate to="/unauthorized" />

    return children
}

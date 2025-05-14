// import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider";
// import type { JSX } from "react";

// type RoleRouteProps = {
//     allowedRoles: string[];
//     children: JSX.Element;
// };

// export default function RoleRoute({ allowedRoles, children }: RoleRouteProps) {
//     const { user } = useAuth();
//     const userRole = user?.user_metadata?.role;

//     if (!user) return <Navigate to="/login" />;
//     if (!allowedRoles.includes(userRole)) return <Navigate to="/unauthorized" />;

//     return children;
// }

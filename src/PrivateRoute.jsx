import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const user = localStorage.getItem('username');
    
    return user ? children : <Navigate to='/login' />;
}


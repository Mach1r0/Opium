'use client'; 
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext({
    user: null,
    token: null,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const retrieveUser = () => {
            const storedUser = localStorage.getItem('yourApp@user');
            const storedToken = localStorage.getItem('yourApp@token');
            
            console.log("Stored User:", storedUser);
            console.log("Stored Token:", storedToken);
    
            if (storedUser && storedToken) {
                setUser(JSON.parse(storedUser));
                setToken(storedToken);
            }
            setIsReady(true);
        };
        retrieveUser();
    }, []);

    const login = async (userData) => {
        try {
            const response = await axios.post("http://localhost:8000/user/login/", userData);
            setUser(response.data);
            setToken(response.data.token);
            localStorage.setItem('yourApp@user', JSON.stringify(response.data));
            localStorage.setItem('yourApp@token', response.data.token);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('yourApp@user');
        localStorage.removeItem('yourApp@token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {isReady ? children : null}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

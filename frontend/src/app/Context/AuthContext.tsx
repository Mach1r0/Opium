'use client'; 
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const retrieveUser = () => {
            const storedUser = localStorage.getItem('yourApp@user');
            const storedToken = localStorage.getItem('yourApp@token');

            if (storedUser && storedToken) {
                setUser(JSON.parse(storedUser));
                setToken(storedToken);
            }
            setIsReady(true);
        };
        retrieveUser();
    }, []);

    const validateToken = async (token, role) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/${role}/validate-token/${token}`);
            return response.status === 200;
        } catch (error) {
            console.error('Token validation failed:', error);
            return false;
        }
    };

    const login = async (userData, role) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/${role}/login`, userData);
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
        <AuthContext.Provider value={{ user, token, login, logout, validateToken }}>
            {isReady ? children : <Loading />} {/* Replace <Loading /> with your loading component */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

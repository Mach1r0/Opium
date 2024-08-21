'use client'; 
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const cookieToken = Cookies.get('');
    
        console.log(localStorage.getItem('token'));
        console.log('Stored Token from LocalStorage:', storedToken);
        console.log('Stored Token from Cookies:', cookieToken);
        console.log(Cookies.get('jwt'));
        
        if (storedToken) {
            setToken(storedToken);
        } else if (cookieToken) {
            setToken(cookieToken);
            localStorage.setItem('yourApp@token', cookieToken);
        }
        
        setIsReady(true);  
    }, []);

    return (
        <AuthContext.Provider value={{ user, token }}>
            {isReady ? children : 'Loading...'} 
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

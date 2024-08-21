'use client';
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [error, setError] = useState("");
    const [isReady, setIsReady] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const cookieToken = Cookies.get('jwt');

        if (storedToken) {
            setToken(storedToken);
        } else if (cookieToken) {
            setToken(cookieToken);
            localStorage.setItem('token', cookieToken);
        }

        setIsReady(true);  
    }, []);

    const login = async (nickname, password) => {
        const data = { nickname, password };

        try {
            const response = await fetch("http://localhost:8000/user/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem("token", result.token);
                setToken(result.token);
                router.push("/");
            } else {
                setError(result.detail || "Falha no login");
            }
        } catch (error) {
            console.error("Erro no login, tente novamente", error);
            setError("Erro no login, tente novamente");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        router.push("/");
    }


    return (
        <AuthContext.Provider value={{ user, token, login, error, logout }}>
            {isReady ? children : 'Loading...'}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

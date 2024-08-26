"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const cookieToken = Cookies.get("jwt");

    if (storedToken) {
      setToken(storedToken);
    } else if (cookieToken) {
      setToken(cookieToken);
      localStorage.setItem("token", cookieToken);
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
      
      console.log("Login response:", result);

      if (response.ok) {
        localStorage.setItem("token", result.access); // If backend returns 'access'
        localStorage.setItem("token", result.access); // Store the token
        console.log("Stored token:", localStorage.getItem("token")); // Log the stored token
                setToken(result.access);
        router.push("/");
      } else {
        setError(result.detail || "Login failed");
      }
    } catch (error) {
      console.error("Login error, please try again", error);
      setError("Login error, please try again");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, error, logout }}>
      {isReady ? children : "Loading..."}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

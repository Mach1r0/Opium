"use client";
import React, { useState, useEffect } from "react";
import Style from "../style/signup.module.css";
import { useRouter } from "next/navigation";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaApple } from "react-icons/fa";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    const data = { email, nome, nickname, password };

    try {
      const response = await fetch("http://localhost:8000/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push("/login");
      } else {
        const result = await response.json();
        setError(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error on sign-up, try again", error);
      setError("Error on sign-up, try again");
    }
  };

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={Style["container-all"]}>
      <div className={Style["container-rightSide"]}>
        <h1>CADASTRAR USANDO MINHAS REDES SOCIAIS</h1>
      </div>
      <div className={Style["container-content"]}>
        <h1>ENTRE COM SUA CONTA</h1>
        <p>Entrar usando minhas redes sociais</p>
        <div className={Style["signup-container"]}>
          <button 
            className={`${Style["signup-icon"]} ${Style["signin-icon"]}`}
            onClick={() => handleRedirect("https://accounts.google.com/signin")}
          >
            <BiLogoGmail />
          </button>
          <button 
            className={`${Style["signup-icon"]} ${Style["signin-icon"]}`}
            onClick={() => handleRedirect("https://www.facebook.com/login")}
          >
            <FaFacebookF />
          </button>
          <button 
            className={`${Style["signup-icon"]} ${Style["signin-icon"]}`}
            onClick={() => handleRedirect("https://appleid.apple.com/account")}
          >
            <FaApple />
          </button>
        </div>
        <div className="flex w-full flex-col border-opacity-50">
          <div className="divider">OU</div>
        </div>
        <form className={Style["container-form"]} onSubmit={handleSignup}>
          <input 
            className={Style["signup-input"]}
            type="email"
            placeholder="Email"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className={Style["signup-input"]}
            type="password"
            placeholder="Senha"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button className={Style["btn-signup"]} type="submit">Entrar</button>
          {error && <p className={Style["error"]}>{error}</p>} 
        </form>
      </div>

        <div className={`${Style["container-leftside"]} ${Style["container-leftside-signin"]}`}>
          <h1>AINDA NÃO TEM CONTA?</h1>
          <button className={Style["btn-signin-left"]} type="submit">Cadastrar</button>
          {error && <p className={Style["error"]}>{error}</p>} 
        </div>
    </div>
  );
}

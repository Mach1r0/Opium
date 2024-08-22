"use client";
import React, { useState } from "react";
import Style from "../style/signup.module.css";
import { useRouter } from "next/navigation";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaApple } from "react-icons/fa";

export default function Signup() {
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
      setError("As senhas não coincidem");
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
  
      const result = await response.json();
  
      if (response.ok) {
        router.push("/login");
      } else {
        console.log(result); 
        setError(result.message || "Falha no cadastro");
      }
    } catch (error) {
      console.error("Erro no cadastro, tente novamente", error);
      setError("Erro no cadastro, tente novamente");
    }
  };

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={Style["container-all"]}>
      <div className={Style["container-content"]}>
        <h1>CADASTRE-SE</h1>
        <form className={Style["container-form"]} onSubmit={handleSignup}>
          <input
            className={Style["signup-input"]}
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className={Style["signup-input"]}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={Style["signup-input"]}
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            className={Style["signup-input"]}
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={Style["signup-input"]}
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className={Style["btn-signup"]} type="submit">
            Cadastrar
          </button>
          {error && <p className={Style["error"]}>{error}</p>}
        </form>
      </div>

      <div className={Style["container-leftside"]}>
        <h1>CADASTRAR USANDO MINHAS REDES SOCIAIS</h1>
        <div className={Style["signup-container"]}>
          <button
            className={Style["signup-icon"]}
            onClick={() => handleRedirect("https://accounts.google.com/signin")}
          >
            <BiLogoGmail />
          </button>
          <button
            className={Style["signup-icon"]}
            onClick={() => handleRedirect("https://www.facebook.com/login")}
          >
            <FaFacebookF />
          </button>
          <button
            className={Style["signup-icon"]}
            onClick={() => handleRedirect("https://appleid.apple.com/account")}
          >
            <FaApple />
          </button>
        </div>
      </div>
    </div>
  );
}
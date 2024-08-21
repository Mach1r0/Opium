'use client';
import React, { useState } from "react";
import Style from "../style/login.module.css";
import { useAuth } from "../Context/AuthContext";
import { useRouter } from "next/navigation";
import { SiGmail } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaApple } from "react-icons/fa";

export default function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(nickname, password);
  };

  return (
    <div className={Style["container-all"]}>
      <div className={Style["container-form"]}>
        <h1>ENTRE COM SUA CONTA</h1>
        <p>Entrar usando minhas redes sociais</p>
        <div className={Style["social-icons"]}>
          <button className={Style["social-button"]}><SiGmail /></button>
          <button className={Style["social-button"]}><ImFacebook2 /></button>
          <button className={Style["social-button"]}><FaApple /></button>
        </div>
        <p>ou</p>
        <form onSubmit={handleSubmit} className={Style['container-input']}>
          <input 
            type="text"
            placeholder="Email"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={Style["login-button"]}>Entrar</button>
        </form>
        {error && <p className={Style["error"]}>{error}</p>}
      </div>

      <div className={Style["container-leftSide"]}>
        <h1>Ainda não tem conta?</h1>
        <button onClick={() => router.push("/sign-up")} className={Style["signup-button"]}>Cadastrar</button>
      </div>
    </div>
  );
}

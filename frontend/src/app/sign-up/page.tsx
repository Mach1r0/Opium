"use client";
import React, { useState } from "react";
import Style from "../style/signup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (event) => {
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

  return (
    <div className={Style["container-all"]}>
      <div className={Style["container-content"]}>
        <h1> Cadastre-se </h1>
        <div className={Style["container-form"]}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSignup}>Cadastrar</button>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
      <div className={Style["container-leftSide"]}>
        <h1> Cadastrar usando minhas redes sociais </h1>
        <button>
          <Link href="/sign-up" type="submit">CADASTRAR</Link>
        </button>
      </div>
    </div>
  );
}

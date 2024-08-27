"use client";
import React, { useEffect, useState } from "react";
import Style from "@/app/style/profile.module.css";
import { useAuth } from "@/app/Context/AuthContext";

export default function Perfil() {
  const { user } = useAuth();

  const [nome, setNome] = useState(user?.nome || "");
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [email, setEmail] = useState(user?.email || "");
  const [celular, setCelular] = useState(user?.phone || "");

  useEffect(() => {
    console.log(user);
    if (user) {
      setNome(user.nome);
      setNickname(user.nickname);
      setEmail(user.email);
      setCelular(user.phone);
    }
  }, [user]);

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelular(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, nickname, email, celular });
  };

  return (
    <div className={Style["container-all"]}>
      <div className={Style["container-form"]}>
        <h1>PERFIL</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome Completo</label>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={nome}
            onChange={handleNomeChange}
          />
          <label>Nickname</label>
          <input
            type="text"
            name="nickname"
            placeholder="Nickname"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <label>Celular</label>
          <input
            type="text"
            name="celular"
            placeholder="Celular"
            value={celular}
            onChange={handleCelularChange}
          />

          <div className={Style["button-container"]}>
            <button type="submit">SALVAR</button>
          </div>
        </form>
      </div>
    </div>
  );
}

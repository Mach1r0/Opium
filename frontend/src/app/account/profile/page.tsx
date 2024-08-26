'use client';
import React, { useEffect } from 'react';
import Style from '@/app/style/profile.module.css';
import { useAuth } from '@/app/Context/AuthContext';

export default function Perfil() {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user); // Log user object to check its structure
  }, [user]);

  return (
    <div className={Style['container-all']}>
      <div className={Style['container-form']}>
        <h1>Perfil</h1>
        <form>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={user?.nickname || ''} // Ensure the property matches
            readOnly
          />
          <label>Sobrenome</label>
          <input
            type="text"
            name="last_name"
            placeholder="Sobrenome"
            value={user?.last_name || ''} // Ensure the property matches
            readOnly
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user?.email || ''} // Ensure the property matches
            readOnly
          />
          <label>Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Senha"
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import Style from "../style/login.module.css";

export default function signup() {
  return (
    <>
      <div className={Style["container-all"]}>
        <div className={Style["container-content"]}>
          <h1> Cadastre-se </h1>
          <div className={Style["container-form"]}>
            <input type="Nome" />
            <input type="Email" />
            <input type="Senha" />
            <input type="Confirmar senha" />
            <button> Cadastrar </button>
          </div>
        </div>
        
        <div className={Style['container-leftSide']}>
            <h1> Cadastrar usando minhas redes socias </h1>
            <button> CADASTRAR </button>
        </div>
      </div>
    </>
  );
}

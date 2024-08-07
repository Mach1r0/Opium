import React from "react";
import Style from "../style/login.module.css";

export default function login() {
  return (
    <>
      <div className={Style["container-all"]}>

            <div className={Style['container-form']}>
                <h1> Entre com sua conta </h1>
                <input type="Email" placeholder="Email" />
                <input type="Senha" placeholder="Senha" />
                <button> Entrar </button>
            </div>

        
        <div className={Style['container-leftSide']}>
                <h1> Ainda não tem conta? </h1>
                <button> Cadastrar </button>
        </div>

      </div>
    </>
  );
}

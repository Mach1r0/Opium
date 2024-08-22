import React from "react";
import Style from "../style/trocas.module.css";

export default function Trocas() {
  return (
    <main>
      <div className={Style["container-all"]}>
        <div className={Style["container-header"]}>
          <h1>Trocas e devoluções</h1>
          <p>
            Entre em contato com nosso atendimento. Eles irão ajudá-lo a iniciar
            o procedimento de devolução ou troca com o vendedor.
          </p>
        </div>

        <div className={Style['container-btn']}>
          <button>Atendimento</button>
        </div>

        <div className={Style["container-trocas"]}>
          <h1>Como realizar devoluções/trocas?</h1>
          <p>
            Devoluções são quando um comprador retorna um produto adquirido no
            Opium. Isso pode acontecer por diversos motivos, tais como:
          </p>
          <div className={Style['container-texto']}>
            <ul>
              <li>
              Produto defeituoso: O item apresenta falhas ou problemas de
                funcionamento.
              </li>
              <li>
               Produto diferente do anunciado: O item recebido não corresponde à
                descrição ou especificações fornecidas no momento da compra.
              </li>
              <li>
             Arrependimento da compra: O comprador decide que não deseja mais o
                produto, mesmo estando em perfeitas condições.
              </li>
              <li>
               Problemas na entrega: O produto foi danificado durante o
                transporte ou chegou fora do prazo estipulado.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

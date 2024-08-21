import React from "react";

export default function LeftFilter() {
  return (
    <main>
      <ul className="menu bg-base-200 rounded-box w-56 h-200 flex flex-col">
        <li>
          <a>Limpar filtros</a>
        </li>

        <li>
          <details open>
            <summary>ORDENAR</summary>
            <ul>
              <li className="flex flex-col">
                <label className="flex items-center">
                  <span>Maior preço:</span>
                  <input type="radio" name="ordenar" />
                </label>
                <label className="flex items-center">
                  <span>Menor preço:</span>
                  <input type="radio" name="ordenar" />
                </label>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details open>
            <summary>CATEGORIA</summary>
            <ul>
              <li className="flex flex-col">
                <label className="flex items-center">
                  <span>Tenis:</span>
                  <input type="radio" name="categoria" />
                </label>
                <label className="flex items-center">
                  <span>Camiseta:</span>
                  <input type="radio" name="categoria" />
                </label>
                <label className="flex items-center">
                  <span>Calça:</span>
                  <input type="radio" name="categoria" />
                </label>
                <label className="flex items-center">
                  <span>Jaqueta:</span>
                  <input type="radio" name="categoria" />
                </label>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details open>
            <summary>CONDIÇÃO</summary>
            <ul>
              <li className="flex flex-col">
                <label className="flex items-center">
                  <span>Novo:</span>
                  <input type="radio" name="condicao" />
                </label>
                <label className="flex items-center">
                  <span>Usado:</span>
                  <input type="radio" name="condicao" />
                </label>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details open>
            <summary>PREÇO</summary>
            <ul className="flex flex-col">
              <label className="flex flex-col">
                <span>Mínimo:</span>
                <input type="number" name="preco-min" />
              </label>
              <label className="flex flex-col">
                <span>Máximo:</span>
                <input type="number" name="preco-max" />
              </label>
            </ul>
          </details>
        </li>
      </ul>
    </main>
  );
}

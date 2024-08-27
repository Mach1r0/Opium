import React from 'react';
import Style from '@/app/style/createshipping.module.css';

export default function Page() {
  return (
    <div className={Style['container-all']}>
      <div className={Style['container-form']}>
        <h1>Adicionar Endereço</h1>
        
        <div className={Style['form-group']}>
          <input type="text" id="endereco" placeholder=" " />
          <label htmlFor="endereco">Endereço</label>
        </div>
        
        <div className={Style['form-group']}>
          <input type="text" id="estado" placeholder=" " />
          <label htmlFor="estado">Estado</label>
        </div>
        
        <div className={Style['form-group']}>
          <input type="text" id="cidade" placeholder=" " />
          <label htmlFor="cidade">Cidade</label>
        </div>
        
        <div className={Style['form-group']}>
          <input type="text" id="cep" placeholder=" " />
          <label htmlFor="cep">CEP</label>
        </div>
        
        <button className={Style['submit-button']}>Salvar</button>
      </div>
    </div>
  );
}
import React from 'react';
import style from '../style/sport.module.css';

export default function Brands({ brands }) {
  return (
    <div className={style['container-brands']}>
      <h1>NAVEGUE POR MARCAS</h1>
      <div className={style['brands']}>
        {Array.isArray(brands) && brands.map((brand, index) => (
          <div key={index} className={style['brand-item']}>
            <img src={brand.image} alt={brand.nome} />
            <p>{brand.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
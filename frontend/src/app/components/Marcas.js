import React, { useEffect, useState } from 'react';
import style from '../style/marcas.module.css';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { fetchBrands } from '../utils/Fetch';

export default function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function loadBrands() {
      try {
        const brandsData = await fetchBrands();
        setBrands(brandsData);
      } catch (error) {
        console.error('Erro ao buscar marcas:', error);
      }
    }

    loadBrands();
  }, []);

  return (
    <div className={style['container-brands']}>
      <h1>NAVEGUE POR MARCAS</h1>
      <div className={style['brands']}>
        <button className={style['button-style']}>
          <GrLinkPrevious />
        </button>
        {Array.isArray(brands) && brands.map((brand, index) => (
          <div key={index} className={style['brand-item']}>
            <img src={brand.image} alt={brand.nome} />
            <p>{brand.nome}</p>
          </div>
        ))}
        <button className={style['button-style']}>
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
}

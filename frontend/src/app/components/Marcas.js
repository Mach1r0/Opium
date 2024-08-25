import React, { useEffect, useState } from 'react';
import style from '../style/marcas.module.css';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { fetchBrands } from '../utils/Fetch';
import Link from 'next/link';

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [currentPage, setCurrent] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    async function loadBrands() {
      try {
        const brandsData = await fetchBrands();
        if (brandsData && Array.isArray(brandsData)) {
          setBrands(brandsData);
        } else {
          console.error('Dados de marcas não são um array:', brandsData);
        }
      } catch (error) {
        console.error('Erro ao buscar marcas:', error);
      }
    }

    loadBrands();
  }, []);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < brands.length) {
      setCurrent(prevPage => prevPage + 1); 
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrent(prevPage => prevPage - 1);
  }
  };

  const displayBrands = brands.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className={style['container-brands']}>
      <h1>NAVEGUE POR MARCAS</h1>
      <div className={style['brands']}>
        <button 
          className={style['button-prev-style']} 
          onClick={handlePrev} 
          disabled={currentPage === 0}
        >
          <GrLinkPrevious />
        </button>
        {displayBrands.length > 0 ? (
          displayBrands.map((brand, index) => (
            <div key={index} className={style['brand-item']}>
              <img src={brand.image} alt={brand.nome} />
            </div>
          ))
        ) : (
          <p style={{ color: 'white' }}>Nenhuma marca disponível</p>
        )}
        <button 
          className={style['button-next-style']} 
          onClick={handleNext} 
          disabled={(currentPage + 1) * itemsPerPage >= brands.length}
        >
          <GrLinkNext />
        </button>
      </div>
      <div>
        <Link href='/brand'>
          <button className={style['ver-mais']}> 
            VER MAIS
          </button>
        </Link>
      </div>
    </div>
  );
}

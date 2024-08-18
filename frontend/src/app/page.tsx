'use client';
import React, { useEffect, useState } from 'react';
import style from './style/home.module.css';
import { get } from 'http';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

async function fetchProducts() {
  const token = getCookie('jwt');  // Obtém o token JWT do cookie
  const response = await fetch('http://localhost:8000/products/ctr-product/', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}



async function fetchBrands() {
  const token = getCookie('jwt'); 
  console.log(getCookie('jwt'));
  const response = await fetch('http://localhost:8000/brand/create/', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data.results; 
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();
      const brandsData = await fetchBrands();
  
      if (productsData && Array.isArray(productsData.results)) {
        setProducts(productsData.results);
      } else {
        console.error('Fetched products data is not an array:', productsData);
      }
  
      if (Array.isArray(brandsData)) {
        setBrands(brandsData);
      } else {
        console.error('Fetched brands data is not an array:', brandsData);
      }
    }
    fetchData();
  }, []);

  return (
    <main className={style['main']}>
      <div className={style['container-all']}>

        <div className={style['container-header']}>
          <div className={style['sale']}>
            <h1>SALE</h1>
            <p>Não perca! Produtos exclusivos!</p>
          </div>
          <img src="/path/to/your/header-image.png" alt="Header" className={style['header-img']} />
        </div>

        <div className={style['container-catalog']}>
          <h1>CATÁLOGO</h1>
          <div className={style['catalog-items']}>
            {Array.isArray(products) && products.map((product, index) => (
              <div key={index} className={style['item']}>
                <img src={product.image} alt={product.name} />
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <button className={style['see-more']}>VER MAIS</button>
        </div>

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

        <div className={style['container-sport']}>
          <h1>NAVEGUE PELO SEU ESPORTE PREFERIDO</h1>
          <div className={style['sports']}>
            <div className={style['sport-item']}>
              <img src="/path/to/soccer.png" alt="Soccer" />
              <p>FUTEBOL</p>
            </div>
            <div className={style['sport-item']}>
              <img src="/path/to/tennis.png" alt="Tennis" />
              <p>TÊNIS</p>
            </div>
            <div className={style['sport-item']}>
              <img src="/path/to/basketball.png" alt="Basketball" />
              <p>BASQUETE</p>
            </div>
            <div className={style['sport-item']}>
              <img src="/path/to/volleyball.png" alt="Volleyball" />
              <p>VÔLEI</p>
            </div>
          </div>
          <button className={style['see-more']}>VER MAIS</button>
        </div>

      </div>
    </main>
  );
}
'use client';
import React, { useEffect, useState } from 'react';
import style from './style/home.module.css';
import Sport from '../app/components/sport';
import Brands from '../app/components/Marcas';

function getCookie() {
  return localStorage.getItem('token');
}

async function fetchProducts() {
  const token = getCookie('jwt');  
  console.log(getCookie('jwt'));
  const response = await fetch('http://localhost:8000/products/ctr-product/', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log("product:", data);
  return data;
}

async function fetchBrands() {
  const token = getCookie('jwt');
  console.log(getCookie());
  const response = await fetch('http://localhost:8000/brand/create/', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const data = await response.json();
  console.log("brand:", data);
  console.log(localStorage.getItem('token'));
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
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <button className={style['see-more']}>VER MAIS</button>
        </div>

        <Brands brands={brands} />

        <div className={style['container-sport']}>
          <div className={style['sports']}>
            <Sport />
          </div>
          <button className={style['see-more']}>VER MAIS</button>
        </div>

      </div>
    </main>
  );
}
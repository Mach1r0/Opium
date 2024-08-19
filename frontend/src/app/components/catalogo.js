'use client';
import React, { useEffect, useState } from 'react';
import style from './style/catalogo.module.css';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

async function fetchProducts() {
  const token = getCookie('jwt');  
  const response = await fetch('http://localhost:8000/products/ctr-product/', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data.results;
}

export default function Catalogo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();
      if (Array.isArray(productsData)) {
        setProducts(productsData);
      } else {
        console.error('Fetched products data is not an array:', productsData);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={style['catalog-container']}>
      <h1>CATÁLOGO</h1>
      <div className={style['catalog-items']}>
        {products.map((product, index) => (
          <div key={index} className={style['item']}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button className={style['see-more']}>VER MAIS</button>
    </div>
  );
}

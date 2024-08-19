import React, { useEffect, useState } from 'react';
import style from '../style/sport.module.css';

async function getData() {
  const response = await fetch('http://localhost:8000/products/ctr-product/');
  const data = await response.json();
  return data;
}

export default function Sport() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await getData();
      if (productsData && Array.isArray(productsData.results)) {
        setProducts(productsData.results);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={style['sport-container']}>
      <h1 className={style['sport-title']}>NAVEGUE PELO SEU ESPORTE PREFERIDO</h1>
      <div className={style['sport-items']}>
        {Array.isArray(products) && products.map((product, index) => (
          <div key={index} className={style['sport-item']}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <button>CONFIRA</button>
          </div>
        ))}
      </div>
      <button className={style['see-more']}>VER MAIS</button>
    </div>
  );
}

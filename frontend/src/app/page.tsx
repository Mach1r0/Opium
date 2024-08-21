'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../app/Context/AuthContext';
import style from './style/home.module.css';
import Sport from '../app/components/sport';
import Brands from '../app/components/Marcas';
import Catalogo from '../app/components/catalogo';
import { fetchProducts, fetchBrands } from './utils/Fetch';

export default function Home() {
  const { token } = useAuth(); 
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (!token) {
        console.error('No token found!');
        return;
    }

    async function fetchData() {
        try {
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
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    console.log('Token:', token);
    fetchData();
}, [token]); // Depend on token to ensure it is available

  return (
    <main className={style['main']}>
      <div className={style['header-buttons']}>
        {token ? (
          <button className={style['profile-button']}>Profile</button>
        ) : (
          <button className={style['login-button']}>Entrar</button>
        )}
      </div>
      <div className={style['container-all']}>
      <div className={style['container-header']}>
          <div className={style['sale']}>
            <h1>SALE</h1>
            <p>Não perca! Produtos exclusivos!</p>
          </div>
          <img src="/path/to/your/header-image.png" alt="Header" className={style['header-img']} />
        </div>

        <div className={style['container-catalog']}>
          <Catalogo />
        </div>

        <div className= {style['container-brands']}>
          <Brands brands={brands} />
        </div>
        <div className={style['container-sport']}>
          <div className={style['sports']}>
            <Sport />
          </div>
        </div>
      </div>
    </main>
  );
}

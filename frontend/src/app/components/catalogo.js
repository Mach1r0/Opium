"use client";
import React, { useEffect, useState } from "react";
import style from "../style/catalogo.module.css";
import fetchProducts from "@/app/utils/Fetch";

export default function Catalogo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();
      if (Array.isArray(productsData)) {
        setProducts(productsData);
      } else {
        console.error("Fetched products data is not an array:", productsData);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={style["catalog-container"]}>
      <h1>CATÁLOGO</h1>
      <div className={style["catalog-items"]}>
        {products.map((product, index) => (
          <div key={index} className={style["item"]}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button className={style["see-more"]}>VER MAIS</button>
    </div>
  );
}

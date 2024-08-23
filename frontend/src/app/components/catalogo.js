"use client";
import React, { useEffect, useState } from "react";
import style from "../style/catalogo.module.css";
import { fetchProducts } from "@/app/utils/Fetch";
import Link from "next/link";
import { ImNext } from "react-icons/im";
import { ImPrevious } from "react-icons/im";

export default function Catalogo() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();

      if (productsData && Array.isArray(productsData.results)) {
        setProducts(productsData.results);
      } else {
        console.error("Fetched products data is not an array:", productsData);
      }
    }
    fetchData();
  }, []);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className={style["catalo-container"]}>
        <h1>CATÁLOGO</h1>
        <div className={style["catalog-items"]}>
          <button onClick={handlePrev} disabled={currentPage === 0}>
            <ImPrevious />
          </button>
          {displayedProducts.map((product, index) => (
            <div key={index} className={style["item"]}>
              <img src={product.image} alt={product.name} />
              <Link href="/">
                <p>{product.name}</p>
              </Link>
              <p>{product.price}</p>
            </div>
          ))}
          <button
            onClick={handleNext}
            disabled={(currentPage + 1) * itemsPerPage >= products.length}
          >
            <ImNext />
          </button>
        </div>
        <div className={style["navigation-buttons"]}>
          <Link href="/catalogo">
            <button>Ver mais</button>
          </Link>
        </div>
      </div>
    </>
  );
}

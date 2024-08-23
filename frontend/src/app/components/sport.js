'use client';
import React, { useEffect, useState } from "react";
import style from "../style/sport.module.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { fetchProducts } from "@/app/utils/Fetch";  


export default function Sport() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();
      if (productsData && Array.isArray(productsData.results)) {
        setProducts(productsData.results);
      }
    }
    fetchData();
  }, []);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < products.length) {
      setCurrentPage(prevPage => {
        const newPage = prevPage + 1;
        console.log('Next Page:', newPage);
        return newPage;
      });
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => {
        const newPage = prevPage - 1;
        console.log('Previous Page:', newPage);
        return newPage;
      });
    }
  };

  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className={style["sport-container"]}>
      <h1 className={style["sport-title"]}>
        NAVEGUE PELO SEU ESPORTE PREFERIDO
      </h1>
      <div className={style["sport-items"]}>
        <button
          className={style["button-prev-style"]}
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          <GrLinkPrevious />
        </button>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product, index) => (
            <div key={index} className={style["sport-item"]}>
              <img src={product.image} alt={product.name} />
              <p>{product.sport}</p>
              <button>CONFIRA</button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
        <button
          className={style["button-next-style"]}
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= products.length}
        >
          <GrLinkNext />
        </button>
      </div>
      <button className={style["see-more"]}>VER MAIS</button>
    </div>
  );
}

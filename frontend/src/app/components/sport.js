import React, { useEffect, useState } from "react";
import style from "../style/sport.module.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Link from 'next/link'; // Ensure this import is added

async function getData() {
  const response = await fetch("http://localhost:8000/products/ctr-product/");
  const data = await response.json();
  return data;
}

export default function Sport() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchData() {
      const productsData = await getData();
      if (productsData && Array.isArray(productsData.results)) {
        setProducts(productsData.results);
      }
    }
    fetchData();
  }, []);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < products.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
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
        <button className={style["button-prev-style"]} onClick={handlePrev} disabled={currentPage === 0}>
          <GrLinkPrevious />
        </button>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product, index) => (
            <div key={index} className={style["sport-item"]}>
              <img src={product.image} alt={product.name} />
              <p>{product.sport}</p>
              <Link href={'/'}>
                <button>CONFIRA</button>
              </Link>
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
      <Link href='/sports'>
        <button className={style["see-more"]}>
          VER MAIS
        </button>
      </Link>
    </div>
  );
}
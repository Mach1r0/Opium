"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../app/Context/AuthContext";
import style from "./style/home.module.css";
import Sport from "../app/components/sport";
import Brands from "../app/components/Marcas";
import Catalogo from "../app/components/catalogo";
import { fetchProducts, fetchBrands } from "@/app/utils/Fetch";
import Sale from '../app/components/sale'; 

export default function Home() {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (!token) {
      console.error("No token found!");
      return;
    }

    async function fetchData() {
      try {
        const productsData = await fetchProducts();
        const brandsData = await fetchBrands();

        if (productsData && Array.isArray(productsData.results)) {
          setProducts(productsData.results);
        } else {
          console.error("Fetched products data is not an array:", productsData);
        }

        if (Array.isArray(brandsData)) {
          setBrands(brandsData);
        } else {
          console.error("Fetched brands data is not an array:", brandsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [token]);

  return (
    <main className={style["main"]}>
      <div className={style["container-all"]}>
        <div className={style["container-header"]}>
          <Sale />
        </div>

        <div className={style["container-catalog"]}>
          <Catalogo />
        </div>

        <div className={style["container-brands"]}>
          <Brands brands={brands} />
        </div>
        <div className={style["container-sport"]}>
          <div className={style["sports"]}>
            <Sport />
          </div>
        </div>
      </div>
    </main>
  );
}
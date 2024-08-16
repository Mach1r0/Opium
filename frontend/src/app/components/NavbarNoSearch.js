"use client";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../style/navbar.module.css";
import Sidebar from "./Sidebar";
import { IoIosMenu } from "react-icons/io";

export default function NavbarNoSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');`}
          {`@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');`}
        </style>
      </Head>

      <div className={styles["container-all"]}>
        <div className={styles["container-logo"]}>
          <img src="/img/Opium-logo.png" alt="Logo" />
          <Link href="/">
            <h1> Opium </h1>
          </Link>
        </div>

        <div className={styles["menu"]}>
          <Link href="/login">
            <button className={styles["menu-btn"]}>Entrar</button>
          </Link>
          <IoIosMenu className={styles["dropdown"]} onClick={toggleSidebar} />
        </div>

      </div>
        {isOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </>
  );
}
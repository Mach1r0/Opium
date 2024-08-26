"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../style/navbar.module.css";
import Sidebar from "./Sidebar";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../Context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { token, user } = useAuth(); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');`}
        </style>
      </Head>

      <div className={styles["container-all"]}>
        <div className={styles["container-logo"]}>
          <img src="/img/Opium-logo.png" alt="Logo" />
          <Link href="/">
            <h1> OPIUM </h1>
          </Link>
        </div>

        <div className={styles["search-container"]}>
          <CiSearch className={styles["search-icon"]} />
          <input
            type="text"
            placeholder=""
            className={styles["search-input"]}
          />
        </div>

        <div className={styles["menu"]}>
          <Link href="/login">
            {token ? (
              <Link href="/account/profile" legacyBehavior>
                <button className={styles['container-perfil']}>
                  {user ? user.nickname : "Perfil"}
                </button>
              </Link>
            ) : (
              <button className={styles["menu-btn"]}>Entrar</button>
            )}
          </Link>
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className={`drawer-button btn btn-primary ${styles["drawer-button"]}`}
              onClick={toggleSidebar}
            >
              <IoIosMenu className={styles["dropdown"]} />
            </label>
          </div>
        </div>
      </div>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

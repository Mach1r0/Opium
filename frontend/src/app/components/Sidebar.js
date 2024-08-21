import React from "react";
import styles from "../style/sidebar.module.css";
import Link from "next/link";
import { FaStore } from "react-icons/fa";
import { RiFolderWarningFill } from "react-icons/ri";
import { MdCurrencyExchange } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
import { LuTrash } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { useAuth } from '../Context/AuthContext';
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ toggleSidebar }) => {
  const { token } = useAuth(); 

  return (
    <div className={`drawer drawer-end ${styles["drawer-button"]}`}>
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={toggleSidebar}
        ></label>
        <ul
          className={`menu bg-base-200 text-base-content min-h-full w-80 p-4 ${styles["menu"]}`}
        >
          <div className={styles["container-title"]}>
            <Link  href='/'>
              <h1>
                  OPIUM
              </h1>
            </Link>
          </div>
          <li className={styles["bar-below"]}>
            <Link href="/" legacyBehavior>
              { token ? (
                <a>
                <CgProfile />
                Perfil
              </a>) : (
                <a>
                <CgProfile />
                Entrar
                </a>
              )}
            </Link>
          </li>
          <li className={styles["bar-below"]}>
            <a>
              <CiSearch />
              Pesquisar
            </a>
          </li>
          <li>
            <Link href="loja" legacyBehavior>
              <a>
                <FaStore /> Nossa loja
              </a>
            </Link>
          </li>
          <li>
            <Link href="contactus" legacyBehavior>
              <a>
                <RiFolderWarningFill /> Fale conosco
              </a>
            </Link>
          </li>
          <li>
            <Link href="trocas" legacyBehavior>
              <a>
                <MdCurrencyExchange /> Trocas e devoluções
              </a>
            </Link>
          </li>
          <li className={styles["bar-below"]}>
            <Link href="aboutus" legacyBehavior>
              <a>
                <LuNewspaper /> Sobre nós
              </a>
            </Link>
          </li>
          <li>
            <a>
              <LuTrash /> Sair
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
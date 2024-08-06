import React from 'react';
import styles from '../style/sidebar.module.css';

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className={styles['sidebar']}>
      <button onClick={toggleSidebar} className={styles['close-btn']}>X</button>
      <ul>
        <li><a href="#">Nossa loja</a></li>
        <li><a href="#">Fale conosco</a></li>
        <li><a href="#">Trocas e devoluções</a></li>
        <li><a href="#">Termos de uso</a></li>
        <li><a href="#">Configurações</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

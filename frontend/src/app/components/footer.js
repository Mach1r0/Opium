import React from 'react';
import styles from '../style/footer.module.css'; 
import { BiLogoGmail, BiLogoInstagram } from "react-icons/bi";
import { SiVisa } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa6";
import { FaPix } from "react-icons/fa6";

export default function Footer() {
  return (
    <main>
      <div className={styles['containerAll']}>
        
        <div className={styles['container-contato']}>
          <h1 className={styles['footer-title']}> ENTRE EM CONTATO </h1>
          <div className={styles['contact-item']}>
            <BiLogoGmail className={styles['icon']} />
            <p>opium@gmail.com</p>
          </div>
          <div className={styles['contact-item']}>
            <BiLogoInstagram className={styles['icon']} />
            <p>@opiumstore</p>
          </div>
        </div>
        
        <div className={styles['container-pagamento']}>
          <h1 className={styles['footer-title']}> FORMAS DE PAGAMENTO </h1>
          <div className={styles['contact-item']}>
            <SiVisa className={styles['icon']} />
            <p>Visa</p>
          </div>
          <div className={styles['contact-item']}>
            <RiMastercardFill className={styles['icon']} />
            <p>Mastercard</p>
          </div>
          <div className={styles['contact-item']}>
            <FaCreditCard className={styles['icon']} />
            <p>Elo</p>
          </div>
          <div className={styles['contact-item']}>
            <FaPix className={styles['icon']} />
            <p>Pix</p>
          </div>
        </div>
     
      </div>
    </main>
  );
}

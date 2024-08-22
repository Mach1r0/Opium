'use client';

import React from 'react';
import style from '../style/contactus.module.css';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contactus() {
  const whatsappNumber = "+5511999999999"; 
  const instagramHandle = "daniel_santos"; 

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramHandle}`, '_blank');
  };

  return (
    <main className={style['main']}>
      <section className={style['main-texts']}>
        <div>
          <h2 className={style['title']}>FALE CONOSCO</h2>
          <p className={style['text']}>Entre em contato por meio de nossas redes sociais. O atendimento está disponível das 8:00 às 18:30 horas de segunda à sábado.</p>
        </div>

        <button 
          className={style['btn-aboutus']} 
          onClick={handleWhatsappClick}
        >
          <FaWhatsapp className={style['contactus-icon']} />
          Atendimento via Whatsapp
        </button>

        <button 
          className={style['btn-aboutus']} 
          onClick={handleInstagramClick}
        >
          <FaInstagram className={style['contactus-icon']} />
          Atendimento via Instagram
        </button>
        
      </section>
    </main>
  );
}

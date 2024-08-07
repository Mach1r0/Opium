import React from 'react';
import style from '../style/contactus.module.css'
import { FaWhatsapp } from "react-icons/fa";


export default function Contactus() {
  return (
    <main className={style['main']} >
        <section className={style['main-texts']}>
            <div>
                <h2 className={style['title']}>FALE CONOSCO</h2>
                <p className={style['text']}>Entre em contato por meio de nossas redes sociais. O atendimento está disponível das 8:00 às 18:30 horas de segunda à sábado.</p>
            </div>
            <div>
                <button className={style['btn-whatsapp']}>
                    <i className={style['contactus-icon']}></i>
                    <FaWhatsapp />

                    Atendimento via Whatsapp
                </button>
            </div>
        </section>

    </main>
  );
}



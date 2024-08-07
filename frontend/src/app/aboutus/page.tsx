import React from 'react';
import style from '../style/aboutus.module.css';

export default function Aboutus() {
  return (
    <main>

        <div>
            <img className={style['img-aboutus']} src="img/aboutus.png" alt="Logo" />
        </div>

        <div className={style['main-texts']}>
            <div>
                <h2 className={style['title']}>SOBRE NÓS</h2>
                <p className={style['text']}>Bem-vindo à Opium, onde a paixão por tênis e o compromisso com a excelência se encontram! Somos uma equipe dedicada de entusiastas de calçados esportivos que acreditam que o tênis perfeito pode transformar seu dia a dia. Nossa missão é proporcionar aos nossos clientes uma experiência de compra única, oferecendo uma seleção cuidadosamente curada dos melhores tênis do mercado, desde os lançamentos mais recentes até os clássicos atemporais.</p>
                <div className={style['horizontal-bar']}></div>
            </div>

            <div>
                <h2 className={style['title']}>NOSSA SELEÇÃO</h2>
                <p className={style['text']}>Na Opium, você encontrará uma variedade incrível de tênis para todas as ocasiões. Trabalhamos com as melhores marcas para garantir que cada par de tênis ofereça o máximo em desempenho e estilo. Seja para prática esportiva, uso casual ou um look mais sofisticado, temos o tênis ideal para você.</p>
                <div className={style['horizontal-bar']}></div>
            </div>

            <div>
                <h2 className={style['title']}>NOSSO COMPROMISSO</h2>
                <p className={style['text']}>Acreditamos que cada cliente merece um atendimento excepcional. Nossa equipe está sempre disponível para ajudar você a encontrar o par perfeito e responder a todas as suas dúvidas. Além disso, oferecemos opções de pagamento seguras, entrega rápida e uma política de devolução fácil, porque a sua satisfação é a nossa prioridade.</p>
                <div className={style['horizontal-bar']}></div>
            </div>
        </div>


    </main>
  );
}

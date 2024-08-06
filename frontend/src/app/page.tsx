import React from 'react';
import style from './style/home.module.css';

export default function Home() {
  return (
    <main className={style['main']}>
      <div className={style['container-all']}>

        <div className={style['container-header']}>
          <div className={style['sale']}>
            <h1>SALE</h1>
            <p>Não perca! Produtos exclusivos!</p>
          </div>
          <img src="/path/to/your/header-image.png" alt="Header" className={style['header-img']} />
        </div>

        <div className={style['container-catalog']}>
          <h1>CATÁLOGO</h1>
          <div className={style['catalog-items']}>
            <div className={style['item']}>
              <img src="/path/to/item1.png" alt="Item 1" />
              <p>R$ 199,00</p>
            </div>
            <div className={style['item']}>
              <img src="/path/to/item2.png" alt="Item 2" />
              <p>R$ 299,00</p>
            </div>
            <div className={style['item']}>
              <img src="/path/to/item3.png" alt="Item 3" />
              <p>R$ 399,00</p>
            </div>
            <div className={style['item']}>
              <img src="/path/to/item4.png" alt="Item 4" />
              <p>R$ 499,00</p>
            </div>
          </div>
          <button className={style['see-more']}>VER MAIS</button>
        </div>

        <div className={style['container-brands']}>
          <h1>NAVEGUE POR MARCAS</h1>
          <div className={style['brands']}>
            <img src="/path/to/adidas.png" alt="Adidas" />
            <img src="/path/to/nike.png" alt="Nike" />
            <img src="/path/to/puma.png" alt="Puma" />
          </div>
        </div>

        <div className={style['container-sport']}>
          <h1>NAVEGUE PELO SEU ESPORTE PREFERIDO</h1>
          <div className={style['sports']}>
            <div className={style['sport-item']}>
              <img src="/path/to/soccer.png" alt="Soccer" />
              <p>FUTEBOL</p>
            </div>
            <div className={style['sport-item']}>
              <img src="/path/to/tennis.png" alt="Tennis" />
              <p>TÊNIS</p>
            </div>
            <div className={style['sport-item']}>
              <img src="/path/to/basketball.png" alt="Basketball" />
              <p>BASQUETE</p>
            </div>
            <div className={style['sport-item']}>
              <img src="/path/to/volleyball.png" alt="Volleyball" />
              <p>VÔLEI</p>
            </div>
          </div>
          <button className={style['see-more']}>VER MAIS</button>
        </div>

      </div>
    </main>
  );
}

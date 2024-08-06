import React from 'react';
import styles from '../style/footer.module.css'; 

export default function Footer() {
  return (
    <main>
      <div className={styles['containerAll']}>
        
        <div className={styles['container-contato']}>
          <h1> ENTRE EM CONTATO </h1>
          <p>opium@gmail.com</p>
          <p>@opiumstore</p>
        </div>
        
        <div className={styles['container-pagamento']}>
          <h1>Formas de pagamento</h1>
          <p>CREDITO </p>
          <p>CREDITO </p>
        </div>
     
      </div>
    </main>
  );
}
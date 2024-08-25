import React from 'react';
import styles from '../style/Button.module.css';

const Button = ({ children, onClick, type = 'button', href }) => {
  if (href) {
    return (
      <a href={href} className={styles.btn}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
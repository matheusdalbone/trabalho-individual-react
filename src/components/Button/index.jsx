import React from "react";
import styles from './styles.module.css';

const WhiteButton = ({ title, logo, onClick }) => {
  return  <button className={styles.white_button} onClick={onClick}>
    <img src={logo} alt="" className={styles.logos}/>
    {title}
  </button>
}

const BlackButton = ({ title, logo, onClick }) => {
  return <button className={styles.black_button} onClick={onClick}>
  <img src={logo} alt="" className={styles.logos}/>
  {title}
</button>
}

export {BlackButton, WhiteButton}
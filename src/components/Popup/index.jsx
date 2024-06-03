import React from "react";
import styles from "./styles.module.css"

export const LoginPopup = ({ title, ativo }) => {

  if(ativo) {
    return <div className={styles.popup_container}>
    <span>{title}</span>
  </div>
  } else {
    return
  }

}
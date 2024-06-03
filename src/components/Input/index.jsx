import React from "react";
import styles from './styles.module.css'

export const Input = ({ type, placeholder, ...rest}) => {
  return <input className={styles.input} placeholder={placeholder}  {...rest} type={type}/>
}
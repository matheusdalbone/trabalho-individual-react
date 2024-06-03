import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"
import GoogleLogo from '../../assets/google-logo.svg'
import AppleLogo from '../../assets/apple-logo.svg'
import * as Buttons from '../../components/Button'
import * as Inputs from '../../components/Input'

const Form = ({ show, onClick, onChange }) => {
  if(show) {
    return <div>
    <h1 className={styles.title}>Entrar no X</h1>
    <Buttons.WhiteButton title="Entrar com Google" logo={GoogleLogo}></Buttons.WhiteButton>
    <Buttons.WhiteButton title="Entrar com Apple" logo={AppleLogo}></Buttons.WhiteButton>
    <div className={styles.textDiv}>
      <div className={styles.line}></div>
      <p>ou</p>
      <div className={styles.line}></div>
    </div>
    <Inputs.Input placeholder="Celular, e-mail ou nome de usuário" onChange={onChange}/>
    <Buttons.WhiteButton title="Avançar" onClick={onClick}/>
    <Buttons.BlackButton title="Esqueceu sua senha?"></Buttons.BlackButton>
    <p className={styles.inscreva}>Não tem uma conta? <span>Inscreva-se</span></p>
    </div>
  }
}

const LoginForm = ({ show, email, onChange, onClick }) => {
  if(!show) {
    return <>
      <div className={styles.loginForm}>
      <h1 className={styles.title}>Digite sua senha</h1>
      <label className={styles.emailTitle}>E-mail</label>
      <label className={styles.email}>{email}</label>
      <Inputs.Input className={styles.input} value="" type={"email"}/>
      <Inputs.Input placeholder="Senha" onChange={onChange} type={"password"}/>
      <span>Esqueceu sua senha?</span>
    </div>
    <div className={styles.buttonDiv}>
      <Buttons.WhiteButton title="Entrar" onClick={onClick}/>
      <p className={styles.inscreva}>Não tem uma conta? <span>Inscreva-se</span></p>
    </div>
    </>
  }
}

export {Form, LoginForm}
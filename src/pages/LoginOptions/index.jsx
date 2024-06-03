import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import TwitterLogo from '../../assets/twitter-logo.svg'
import CloseButton from '../../assets/close-logo.svg'
// import GoogleLogo from '../../assets/google-logo.svg'
// import AppleLogo from '../../assets/apple-logo.svg'
import * as PopUps from "../../components/Popup"
// import * as Buttons from '../../components/Button'
// import * as Inputs from '../../components/Input'
import * as Forms from "../../components/Forms"

function LoginOptions() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[naoEncontrado, setNaoEncontrado] = useState(false)
  const[senhaIncorreta, setSenhaIncorreta] = useState(false)
  const[clicked, setClicked] = useState(false)
  const[show, setShow] = useState(true)

  const handleInputChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputChangePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if(email == "matheus@gmail.com") {
      setShow(show => show = false)
    }

    if(password == "12345") {
    alert("Login efetuado com sucesso")
    }
    setClicked(clicked => clicked = false)
  }, [clicked])

  function signin() {
    setClicked(clicked => clicked = true);
    if (email != "matheus@gmail.com") {
      setNaoEncontrado(naoEncontrado => naoEncontrado = true);
      setTimeout(() => {
        setNaoEncontrado(naoEncontrado => naoEncontrado = false);
      }, 5000);
    }
    if(!show && password != "12345") {
      setSenhaIncorreta(senhaIncorreta => senhaIncorreta = true)
      setTimeout(() => {
        setSenhaIncorreta(senhaIncorreta => senhaIncorreta = false);
      }, 5000);
    }
  }

  return <div className={styles.container}>
    <div className={styles.logoContainer}>
      <img src={ TwitterLogo } alt="Twitter Logo" className={styles.twitterLogo}/>
      <div className={styles.closeButtonDiv}>
        <img src={ CloseButton } alt="Close Button" className={styles.closeButton}/>
      </div>
    </div>
    <div className={styles.formContainer}>
      <Forms.Form show={show} onClick={signin} onChange={handleInputChangeEmail}></Forms.Form>
      <Forms.LoginForm show={show} email={email} onChange={handleInputChangePassword} onClick={signin}></Forms.LoginForm>
      <PopUps.LoginPopup title={"Desculpe, mas não encontramos sua conta."} ativo={naoEncontrado}></PopUps.LoginPopup>
      <PopUps.LoginPopup title={"Senha incorreta."} ativo={senhaIncorreta}></PopUps.LoginPopup>
    </div>
  </div>
}

export default LoginOptions

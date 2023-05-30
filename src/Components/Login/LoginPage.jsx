import React, { useState } from "react"
import { auth, provider } from "../../config"
import { signInWithPopup } from "firebase/auth"
import styled from "styled-components"

const Login = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 76vh;
`
const H2 = styled("h2")``
const Loginwithgooglebtn = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  font-size: 20px;
  width: 15rem;
  height: 3rem;
  gap: 0.3rem;
`
const GoogleImg = styled("img")`
  width: 1.5rem;
`
const LoginPage = (setIsAuth) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("Auth", true)
      setIsAuth(true)
    })
  }
  return (
    <Login>
      <H2>Google bilan kirish</H2>
      <Loginwithgooglebtn onClick={signInWithGoogle}>
        <GoogleImg src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
        Google bilan kirish
      </Loginwithgooglebtn>
    </Login>
  )
}

export default LoginPage

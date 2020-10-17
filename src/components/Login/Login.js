import React from 'react'
import styled from 'styled-components'
import Btn from '@material-ui/core/Button'
import { auth, provider } from '../../firebase'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    return (
        <LoginWrapper>
            <LoginBox>
                <WhatsAppImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="" />
                <LoginTextWrapper>
                    <LoginText>Sign in to WhatsApp</LoginText>
                </LoginTextWrapper>
                <Button onClick={signIn}>Sign in with Google</Button>
            </LoginBox>
        </LoginWrapper>
    )
}

export default Login

const LoginWrapper = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
`
const LoginBox = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`
const WhatsAppImage = styled.img`
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
`
const LoginTextWrapper = styled.div``
const LoginText = styled.h1``
const Button = styled(Btn)`
    color: white !importent;
    margin-top: 50px !important;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
`

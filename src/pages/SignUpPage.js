import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

import InputData from '../components/InputData'
import ButtonBox from '../components/ButtonBox'


export default function SignUpPage () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();

    function persistUserDataInServer(e) {

        e.preventDefault();

        const body = {name,email,password,confirmPassword};
        console.log(body);
    }
 
    return (
        <ContainerPage>
            <H1>MyWallet</H1>
            <FormWrapper onSubmit = {persistUserDataInServer}>

                <InputData
                     placeholder = "Nome" 
                     onChange = {(e) => setName(e.target.value)} 
                     value = {name} 
                     type = "text"
                />
                <InputData 
                    placeholder = "E-mail" 
                    onChange = {(e) => setEmail(e.target.value)} 
                    value = {email} 
                    type = "email" 
                 />
                <InputData 
                    placeholder = "Senha" 
                    onChange = {(e) => setPassword(e.target.value)} 
                    value = {password} 
                    type = "password" 
                />
                <InputData 
                    placeholder = "Confirme a senha"
                    onChange = {(e) => setConfirmPassword(e.target.value)} 
                    value = {confirmPassword} 
                    type = "password" 
                />

                <ButtonBox text = "Cadastrar" type = "submit"></ButtonBox>
            </FormWrapper>
            <Footer onClick = {() => history.push('/sign-in')}>Já tem uma conta ? Entre agora</Footer>         
        </ContainerPage>
    );
}

export const ContainerPage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const H1 = styled.h1`

    text-align: center;
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 50px; 
    color: #FFF;
`

export const FormWrapper = styled.form`
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const Footer = styled.footer`

    font-family: Raleway;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.1rem;
    color: #FFF;
    text-align: center;
    margin-top: 2.5rem;
`
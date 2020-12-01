import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import InputData from '../components/InputData'
import ButtonBox from '../components/ButtonBox'
import { ContainerPage, H1, FormWrapper, Footer} from './SignUpPage'


export default function SignInPage () {

    const history = useHistory();
 
    return (
        <ContainerPage>
            <H1>MyWallet</H1>
            <FormWrapper >
                <InputData text = "E-mail" />
                <InputData text = "Senha" />
                <ButtonBox text = "Entrar"></ButtonBox>
            </FormWrapper>
            <Footer onClick = {() => history.push('/sign-up')} >Primeira vez ? Cadastre-se!</Footer>         
        </ContainerPage>
    );
}

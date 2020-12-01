import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import InputData from '../components/InputData'
import ButtonBox from '../components/ButtonBox'
import { ContainerPage, H1, FormWrapper, Footer} from './SignUpPage'


export default function SignInPage () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function sendindDataToServerLogIn(e) {

        e.preventDefault();

        const body = {email,password};
        console.log(body);
    }
 
    return (
        <ContainerPage>
            <H1>MyWallet</H1>
            <FormWrapper onSubmit = {sendindDataToServerLogIn}>
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
                <ButtonBox text = "Entrar"></ButtonBox>
            </FormWrapper>
            <Footer onClick = {() => history.push('/sign-up')} >Primeira vez ? Cadastre-se!</Footer>         
        </ContainerPage>
    );
}

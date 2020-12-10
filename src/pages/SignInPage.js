import React, {useContext, useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import InputData from '../components/InputData'
import ButtonBox from '../components/ButtonBox'
import { ContainerPage, H1, FormWrapper, Footer} from './SignUpPage'
import UserContext from '../Contexts/UserContext'


export default function SignInPage () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const {setUser} = useContext(UserContext);

    function sendindDataToServerLogIn(e) {

        e.preventDefault();

        const body = {email,password};
        
        // const promise = axios.post('http://localhost:3000/api/sign-in', body);
        const promise = axios.post('https://wallet-bootcamp.herokuapp.com/api/sign-in', body);


        promise.then(res => {
            setUser(res.data);
            history.push('/');
        }).catch (e => {
            console.log("Deu ruim o Sign in: error " + e.response.status);
        })   
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

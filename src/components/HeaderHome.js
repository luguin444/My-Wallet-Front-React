import React, { useContext } from 'react'
import styled from 'styled-components'
import { VscSignOut } from 'react-icons/vsc'

import {Title} from '../pages/NewData';
import UserContext from '../Contexts/UserContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function HeaderHome() {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    function signOut() {


            const request =  axios.post('http://localhost:3000/api/sign-out', {}, { headers: {Authorization: `Bearer ${user.token}`}});
            // const request =  axios.post('https://wallet-bootcamp.herokuapp.com/api/sign-out', {}, { headers: {Authorization: `Bearer ${user.token}`}});
            
            request.then(() => {
                history.push('/sign-in');
                setUser(null);              
            }).catch( e => {
                console.log(e.response);
            })
    }
 
    return (
        <HeaderStyled>
            <Title>{`Olá, ${user.name}`}</Title>
            <VscSignOut className = 'icon' onClick = {signOut} />
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;

    .icon {
        color: #fff;
        font-size: 1.7rem;
        margin-top: 0.05rem;
    }
`
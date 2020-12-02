import React, { useContext } from 'react'
import styled from 'styled-components'
import { VscSignOut } from 'react-icons/vsc'

import {Title} from '../pages/NewData';
import UserContext from '../Contexts/UserContext';
import { useHistory } from 'react-router-dom';

export default function HeaderHome() {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    function signOut() {
        setUser(null);
        history.push('/sign-in');
    }
 
    return (
        <HeaderStyled>
            {/* <Title>{`Olá, ${user.name}`}</Title> */}
            <Title>{`Olá, Fulano`}</Title>
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
import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";

import HeaderHome from '../components/HeaderHome';
import ButtonBoxHome from '../components/ButtonBoxHome';
import CashFlow from '../components/CashFlow';

   
export default function Home() {

  const history = useHistory();

    return (
      <WrapperPage>
        <HeaderHome />
        <CashFlow />
        <ContainerButtons>
            <ButtonBoxHome type = "entrance" onClick = {() => history.push('newData/in')} > </ButtonBoxHome> 
            <ButtonBoxHome type = "out" onClick = {() => history.push('newData/out')} ></ButtonBoxHome>
        </ContainerButtons>
      </WrapperPage>
    );
}

const WrapperPage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
`

const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`


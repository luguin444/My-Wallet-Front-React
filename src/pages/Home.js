import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import HeaderHome from '../components/HeaderHome';
import ButtonBoxHome from '../components/ButtonBoxHome';
import CashFlow from '../components/CashFlow';

   
export default function Home() {

 
    return (
      <WrapperPage>
        <HeaderHome />
        <CashFlow />
        <ContainerButtons>
            <Link to = 'newData/in' > <ButtonBoxHome type = "entrance"> </ButtonBoxHome> </Link>
            <Link to = 'newData/out' > <ButtonBoxHome type = "out"></ButtonBoxHome> </Link>
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


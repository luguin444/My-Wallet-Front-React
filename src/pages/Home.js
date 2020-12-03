import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import HeaderHome from '../components/HeaderHome';
import ButtonBoxHome from '../components/ButtonBoxHome';
import Financie from '../components/Financie';
import axios from 'axios';
import UserContext from '../Contexts/UserContext';

   
export default function Home() {

    const [financies, setFinancies] = useState([]);
    const [total, setTotal] = useState(0);

    const {user} = useContext(UserContext);

    useEffect(() => {
        
        const promise = axios.get('http://localhost:3000/api/financies', {headers: {Authorization: `Bearer ${user.token}`}});
        promise.then(res => {
            setFinancies(res.data);
            console.log(res.data);

        }).catch( e => {
            console.log("Erro na aquisição de entradas e saídas");
        })
    },[])
 
    return (
      <WrapperPage>
        <HeaderHome />
        <CashFlow isThereAnyFinancie ={ financies.length !== 0}>
            {
                (financies.length === 0) ?
                    <p>Não há registro de <br /> entrada ou saída</p> :
                    <>
                        {financies.map(f => <Financie financie = {f} key = {f.id} total = {total} setTotal = {setTotal}/>)}
                        <div className = "total">
                            <strong>SALDO</strong>
                            <span>{total.toFixed(2)}</span>
                        </div>
                    </>
            }
        </CashFlow>
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

const CashFlow = styled.div`
    width: 100%;
    background-color: #FFF;
    height: 26rem;
    padding: 1rem 0.8rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items:  ${ (props) => props.isThereAnyFinancie ? "start" : "center"};
    justify-content: ${ (props) => props.isThereAnyFinancie ? "start" : "center"};
    position: relative;

    p{
        font-family: Raleway;
        font-size: 20px;
        line-height: 23px;
        color: #868686;
        text-align: center;
    }

    .total {
        position: absolute;
        bottom: 1rem;
        left: 0.8rem;
        display: flex;
        justify-content: space-between;
        width: 91%;
    }
`

const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`


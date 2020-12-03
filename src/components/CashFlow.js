import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';

import Financie from './Financie';
import UserContext from '../Contexts/UserContext';


export default function CashFlow (props) {
 

    const [financies, setFinancies] = useState([]);
    const [total, setTotal] = useState(0);
    const [flag, setFlag] = useState(0);

    const {user} = useContext(UserContext);

    useEffect(() => {
        
        const promise = axios.get('http://localhost:3000/api/financies', {headers: {Authorization: `Bearer ${user.token}`}});
        promise.then(res => {
            setFinancies(res.data);
            setFlag(flag +1);
            console.log(res.data);
        }).catch( e => {
            console.log("Erro na aquisição de entradas e saídas");
        })
    },[])

    useEffect(() => {
        let sum = 0;
        financies.forEach( f => {
            if (f.type === "in") 
                sum = sum + parseFloat(f.value);
            else 
                sum = sum - parseFloat(f.value);  
        })
        setTotal(sum);
    }, [flag]);

    return (
        <StyledCashFlow isThereAnyFinancie ={ financies.length !== 0} totalIsPositive = {total >= 0}>
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
        </StyledCashFlow>
    );
}

const StyledCashFlow = styled.div`
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

        strong {
            font-size: 1.2rem;
        }

        span {
            color: ${ (props) => props.totalIsPositive ? "#03AC00" : "#C70000"};
        }
    }
`
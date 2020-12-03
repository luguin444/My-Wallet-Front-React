import React from 'react'
import styled from 'styled-components'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { AiOutlineMinusCircle } from 'react-icons/ai'


export default function ButtonBoxHome(props) {

    const { type } = props;
 
    return (
        <StyledButton>
            { type === "entrance" ? 
                <>
                    <HiOutlinePlusCircle className = "icon" /> 
                    <p>Nova <br /> entrada</p>
                </> : 
                <>
                    <AiOutlineMinusCircle className = "icon" /> 
                    <p>Nova <br /> saída</p>
                </> 
            }
        </StyledButton>
    );
}

const StyledButton = styled.button`
    background: #A328D6;
    border-radius: 5px;
    margin-top: 1rem;
    outline: 0;
    border: 0;
    color: #FFF;
    font-family: Raleway;
    font-weight: bold;
    height: 7rem;
    //flex-grow: 1; deu ruim as margens centrais ou laterais 
    width: 9.5rem;
    padding: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.1rem;
    text-align: start;

    .icon {
        font-size: 1.5rem;
    }

`
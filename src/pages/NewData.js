import React, {useState} from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import FormNewFinancie from '../components/FormNewFinancie';



export default function NewData() {

    const { type } = useParams();  
 
    return (
      <WrapperPage>
            <Title>{type === "in" ? "Nova entrada": "Nova saída" }</Title>
            <FormNewFinancie type = {type}/>
      </WrapperPage>
    );
}

const WrapperPage = styled.div`
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding:1.5rem 1.3rem;
`

export const Title = styled.h1`
    color: #FFF;
    font-family: Raleway;
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 1.9rem;
    margin: 0;
    display: block;
    margin-bottom: 1.25rem;
`

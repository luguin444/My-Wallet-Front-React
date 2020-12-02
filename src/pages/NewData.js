import React, {useState} from 'react'
import styled from 'styled-components'
import InputData from '../components/InputData'
import ButtonBox from '../components/ButtonBox'
import { useParams } from "react-router-dom";


export default function NewData() {

    const { type } = useParams();

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
 
    return (
      <WrapperPage>
            <Title>{type === "in" ? "Nova entrada": "Nova saída" }</Title>
            <form>
                <InputData 
                    placeholder = "Valor" 
                    onChange = {(e) => setValue(e.target.value)} 
                    value = {value} 
                    type = "number"
                />
                <InputData 
                    placeholder = "Descrição" 
                    onChange = {(e) => setDescription(e.target.value)} 
                    value = {description} 
                    type = "text"
                />
                <ButtonBox text = {type === "in" ? "Salvar entrada": "Salvar saída" } type = "submit"></ButtonBox>
            </form>       
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

import React, {useState} from 'react'
import styled from 'styled-components'


export default function InputData (props) {
 
    const {text} = props; 
    return (
      <Input placeholder = {text} />
    );
}

const Input = styled.input`
    background: #FFFFFF;
    border-radius: 5px;
    height: 58px;
    width: 84%;
    outline: 0;
    border: 0;
    margin: 0.5rem 0;
    padding-left: 0.8rem;
    font-size: 1.4rem;

    &::placeholder {
        color: #000;
        font-family: Raleway;
        font-style: normal;
        font-size: 1.35rem;
        line-height: 1.5rem;
    }
    &:focus {
        outline:0;
    }   
`
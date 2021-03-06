import React, {useState} from 'react'
import styled from 'styled-components'


export default function InputData (props) {
 
    const {placeholder, type, value, onChange} = props; 
    return (
      <Input 
        placeholder = {placeholder} 
        type = {type} 
        value = {value}
        onChange = {onChange}
        required
     />
    );
}

const Input = styled.input`
    background: #FFFFFF;
    border-radius: 5px;
    height: 58px;
    width: 100%;
    outline: 0;
    border: 0;
    margin: 0.5rem 0;
    padding-left: 0.8rem;
    font-size: 1.4rem;

    &::placeholder {
        color: #222;
        font-family: Raleway;
        font-style: normal;
        font-size: 1.35rem;
        line-height: 1.5rem;
    }
    &:focus {
        outline:0;
    }   
`
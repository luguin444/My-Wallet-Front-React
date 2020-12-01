import React, {useState} from 'react'
import styled from 'styled-components'


export default function ButtonBox (props) {
 
    const {text} = props; 
    return (
      <StyledButton>
          {text}
      </StyledButton>
    );
}

const StyledButton = styled.button`

    background: #A328D6;
    border-radius: 5px;
    width: 326px;
    height: 46px;
    width: 84%;
    outline: 0;
    border: 0;
    color: #FFF;
    font-family: Raleway;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    margin-top: 0.5rem;
`
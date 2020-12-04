import React, { useEffect } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'


export default function Financie (props) {

    const { financie, total, setTotal } = props;
 
    return (
        <WrapperFinancie isIn ={ financie.type === "in"}>
            <div>
                <span className = "date"> {dayjs(financie.date).format('DD/MM')} </span>
                <span className = "text">{financie.description}</span>
            </div>
            <span className =  "value" > {financie.value} </span>
        </WrapperFinancie>
    );
}

const WrapperFinancie = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
        font-family: Raleway;
        font-size: 1rem;
        line-height: 1.2rem;
    }

    .date{ 
        color: #C6C6C6;
    }
    .text {
        color: #222;
    }

    .value {
        color: ${(props) => props.isIn ? "#03AC00" : "#C70000"};
    }
`
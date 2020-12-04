import React, {useState, useContext} from 'react'
import axios from 'axios'
import InputData from './InputData' 
import ButtonBox from './ButtonBox'
import UserContext from '../Contexts/UserContext';
import { useHistory } from 'react-router-dom';

export default function FormNewFinancie (props) {

    const {type} = props; 
    const history = useHistory();
    const {user} = useContext(UserContext);

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    function sendFinancieToServer(e) {

        e.preventDefault();

        const body = {value,description,type};
        const promise = axios.post('http://localhost:3000/api/financies', body, {headers: {Authorization: `Bearer ${user.token}`}})
        // const promise = axios.post('https://wallet-bootcamp.herokuapp.com/api/financies', body, {headers: {Authorization: `Bearer ${user.token}`}})

        promise.then((res) => {
            history.push('/');
        });
    }
 
    return (
        <form onSubmit = {(e) => sendFinancieToServer(e)}>
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
            <ButtonBox text = {type === "in" ? "Salvar entrada": "Salvar saída" } type = "submit"> </ButtonBox>
        </form>      
    );
}
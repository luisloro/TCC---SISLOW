
import CadCliente from "../cad.cliente";
import {Route,Routes,Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import {useForm} from  'react-hook-form';

function EditCliente(){
    const [cliente,setCliente] = useState<Cliente[]>([]);
    const {id} = useParams();
    const {register, handleSubmit} = useForm()


    const [nomeCliente,setNome] = useState('');
    const [foneCliente,setFone] = useState('');
    const [cpfCliente,setCPF] = useState('');

    const atualizaCliente = (dados: any)=> axios.post(
        `${BASE_URL}/atucli?nome=${nomeCliente}&fone=${foneCliente}&cpf=${cpfCliente}&id=${id}`).then(response => {
            console.log(response.data);
        });

    useEffect(()=>{

        axios.get(
            `${BASE_URL}/cliente/${id}`).then(response => {
                console.log(response.data.nome);
                setNome(response.data.nome);
                setCPF(response.data.cpf);
                setFone(response.data.fone);
            });
    },[])




    return(
        
            
            <div>
                <h1>Edição de Cliente</h1>
                <form onSubmit={handleSubmit(atualizaCliente)} >
                    <label >Nome do Cliente</label>
                    <input type="text" value={nomeCliente} onChange={(e)=>setNome(e.target.value)}/>

                    <label >Fone</label>
                    <input type="text" value={foneCliente} onChange={(e)=>setFone(e.target.value)}/>

                    <label >CPF</label>
                    <input type="text" value={cpfCliente} onChange={(e)=>setCPF(e.target.value)} />

                    

                    <button type="submit">Enviar</button>
                </form>
            </div>
        

    )
}

export default EditCliente;


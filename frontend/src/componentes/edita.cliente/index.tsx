
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
    const [docCliente,setDoc] = useState('');
    const [senha,setSenha] = useState('');

    const atualizaCliente = (dados: any)=> axios.post(
        `${BASE_URL}/atucli?nome=${nomeCliente}&fone=${foneCliente}&documento=${docCliente}&senha=${senha}&id=${id}`).then(response => {
            
            setNome('');
            setDoc('');
            setFone('');
            setDoc('');
            setSenha('');
        });

    useEffect(()=>{

        axios.get(
            `${BASE_URL}/cliente/${id}`).then(response => {
                console.log(response.data.nome);
                setNome(response.data.nome);
                setDoc(response.data.documento);
                setFone(response.data.fone);
                setSenha(response.data.senha);
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

                    <label >Documento</label>
                    <input type="number" value={docCliente} onChange={(e)=>setDoc(e.target.value)} />

                    <label >Senha</label>
                    <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>

                    

                    <button type="submit">Enviar</button>
                </form>
            </div>
        

    )
}

export default EditCliente;


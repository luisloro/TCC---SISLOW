import {Route,Routes,Link} from "react-router-dom";
import {useForm} from  'react-hook-form';
import axios from 'axios';
import { BASE_URL } from "../request";
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";

function CadClienteJurudico(){

    const {register, handleSubmit} = useForm();

    const [lista,setLista] = useState<Cliente[]>([]);

    const [nomeCliente,setNome] = useState('');
    const [foneCliente,setFone] = useState('');
    const [docCliente,setDoc] = useState('');
    const [senha,setSenha] = useState('');
    const [msg,setMsg] = useState('');
    const [email,setEmail] = useState('');
    const [ie,setIE] = useState('');

    const cadCliente = (dados: any)=> axios.post(
        `${BASE_URL}/cadclientejuridico?nome=${nomeCliente}&fone=${foneCliente}&cnpj=${cnpj}&senha=${senha}&email=${email}&ie=${ie}`).then(response => {
            setNome('');
            setDoc('');
            setFone('');
            setSenha('');
            setEmail('');
            setIE('');
            setMsg(response.data);
            

        });

        
        const cnpj = docCliente.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5");
        
        useEffect(()=>{

            
        },[msg])

       
    return(
        
            
            <div>
                <form onSubmit={handleSubmit(cadCliente)} >
                    <label >Nome do Cliente</label>
                    <input type="text"  value={nomeCliente} onChange={(e)=>setNome(e.target.value)}/>

                    <label >Fone</label>
                    <input type="text"   value={foneCliente} onChange={(e)=>setFone(e.target.value)}/>

                    <label >CNPJ: </label>
                    <input type="text" placeholder="12.345.567/0001-99" value={cnpj} pattern={'[,0-9,][@-#-$]+$'} minLength={14} maxLength={14} onChange={(e)=>setDoc(e.target.value)} />

                    <label >Inscrição Estadual: </label>
                    <input type="text"   value={ie} pattern={'[,0-9,][@-#-$]+$'} minLength={11} maxLength={11} onChange={(e)=>setIE(e.target.value)}/>

                    <label >Email:</label>
                    <input type="text"   value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <label >Senha</label>
                    <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>

                    <button type="submit">Enviar</button>
                </form>
                <label >{msg}</label>
                
            </div>

            
        

    )
}

export default CadClienteJurudico;

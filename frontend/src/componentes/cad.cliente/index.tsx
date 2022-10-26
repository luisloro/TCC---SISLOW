import {Route,Routes,Link} from "react-router-dom";
import {useForm} from  'react-hook-form';
import axios from 'axios';
import { BASE_URL } from "../request";
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";

function CadCliente(){

    const {register, handleSubmit} = useForm();

    const [lista,setLista] = useState<Cliente[]>([]);

    const [nomeCliente,setNome] = useState('');
    const [foneCliente,setFone] = useState('');
    const [docCliente,setDoc] = useState('');
    const [senha,setSenha] = useState('');
    const [msg,setMsg] = useState('');
    const [email,setEmail] = useState('');
   

    const cadCliente = (dados: any)=> axios.post(
        `${BASE_URL}/cadcliente?nome=${nomeCliente}&fone=${foneCliente}&cpf=${cpf}&senha=${senha}&email=${email}`).then(response => {
            setNome('');
            setDoc('');
            setFone('');
            setSenha('');
            setEmail('');
            setMsg(response.data);
            

        });

        
        const cpf = docCliente.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");
        
        
        useEffect(()=>{

            
        },[msg])

       
    return(
        
            
            <div>
                <form onSubmit={handleSubmit(cadCliente)} >
                    <label >Nome do Cliente</label>
                    <input type="text"  value={nomeCliente} onChange={(e)=>setNome(e.target.value)}/>

                    <label >Fone</label>
                    <input type="text"   value={foneCliente} onChange={(e)=>setFone(e.target.value)}/>

                    <label >CPF: </label>
                    <input type="text" placeholder="123.456.789.90" value={cpf} pattern={'[,0-9,][@-#-$]+$'} minLength={11} maxLength={11} onChange={(e)=>setDoc(e.target.value)} />

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

export default CadCliente;


import CadCliente from "../cad.cliente";
import {Route,Routes,Link,useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import {useForm} from  'react-hook-form';

function EditCliente(){
    const navigate = useNavigate()
    const [cliente,setCliente] = useState<Cliente[]>([]);
    const {id} = useParams();
    const {register, handleSubmit} = useForm()


    const [nomeCliente,setNome] = useState('');
    const [foneCliente,setFone] = useState('');
    const [cpf,setCpf] = useState('');
    const [cnpj,setCnpj] = useState('');
    const [ie,setIE] = useState('');
    const [senha,setSenha] = useState('');
    const [email,setEmail] = useState('');
    const [tipo,setTipo] = useState<Boolean>();

    const atualizaCliente = (dados: any)=> axios.post(
        `${BASE_URL}/atucli?nome=${nomeCliente}&fone=${foneCliente}&cpf=${cpfEditado}&senha=${senha}&id=${id}&cnpj=${cnpjEditado}&ie=${ie}&email=${email}`).then(response => {
            
            setNome('');
            setCpf('');
            setFone('');
            setSenha('');
            setCnpj('');
            setIE('');
            navigate('/listacli');
        });
        
    useEffect(()=>{

        axios.get(
            `${BASE_URL}/cliente/${id}`).then(response => {
                console.log(response.data.cnpj);
                setNome(response.data.nome);
                setCpf(response.data.cpf);
                setFone(response.data.fone);
                setSenha(response.data.senha);
                setTipo(response.data.tipo);
                setCnpj(response.data.cnpj);
                setIE(response.data.ie);
                setEmail(response.data.email);
            });
    },[])

    const cpfEditado = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");
    const cnpjEditado = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5");

    return(
        
            
            <div>
                <h1>Edição de Cliente</h1>
                <form onSubmit={handleSubmit(atualizaCliente)} >
                    <label >Nome do Cliente</label>
                    <input type="text" value={nomeCliente} onChange={(e)=>setNome(e.target.value)}/>

                    <label >Fone</label>
                    <input type="text" value={foneCliente} onChange={(e)=>setFone(e.target.value)}/>

                    {!tipo && (<div><label >CPF: </label><input type="text" value={cpfEditado} pattern={'[,0-9,][@-#-$]+$'} minLength={11} maxLength={11} onChange={(e)=>setCpf(e.target.value)} /></div>)}
                    {tipo && (<div><label >CNPJ: </label><input type="text" value={cnpjEditado} pattern={'[,0-9,][@-#-$]+$'} minLength={14} maxLength={14} onChange={(e)=>setCnpj(e.target.value)} /></div>)}
                    {tipo && (<div><label >IE: </label> <input type="text" value={ie} pattern={'[,0-9,][@-#-$]+$'} minLength={11} maxLength={11} onChange={(e)=>setIE(e.target.value)} /></div>)}

                    <label >Email:</label>
                    <input type="text"   value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <label >Senha</label>
                    <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>

                    

                    <button type="submit">Enviar</button>
                </form>
            </div>
        

    )
}

export default EditCliente;


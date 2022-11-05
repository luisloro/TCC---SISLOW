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
   
    const validaCPF = function(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
      if (strCPF == "00000000000") return false;
    
      for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }

    const cpfChange = function(){
        let cleanCPF = cpf.replaceAll('.', '');
        cleanCPF = cleanCPF.replaceAll('-', '');
        if(!validaCPF(cleanCPF)){
            setDoc('');
            alert("CPF inválido");
        }
    }

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
                <div className="row">
                    <div className="col-md-4">
                        <label >Nome do Cliente:</label>
                        <input className="form-control" type="text" required value={nomeCliente} onChange={(e)=>setNome(e.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label >Fone:</label>
                        <input className="form-control" type="text"  required  value={foneCliente} onChange={(e)=>setFone(e.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label >CPF: </label>
                        <input onBlur={cpfChange} className="form-control"  required type="text" placeholder="123.456.789.90" value={cpf} pattern={'[,0-9,][@-#-$]+$'} minLength={11} maxLength={11} onChange={(e)=>setDoc(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label >Email:</label>
                        <input className="form-control" type="text"  required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label >Senha:</label>
                        <input className="form-control" type="password"  required value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-success min-300 mt-3" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
            <label >{msg}</label>
        </div>
    )
}

export default CadCliente;

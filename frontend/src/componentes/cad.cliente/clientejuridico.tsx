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

<<<<<<< HEAD
    const validaCNPJ = function(cnpj) {
 
        cnpj = cnpj.replace(/[^\d]+/g,'');
     
        if(cnpj == '') return false;
         
        if (cnpj.length != 14)
            return false;
     
        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" || 
            cnpj == "11111111111111" || 
            cnpj == "22222222222222" || 
            cnpj == "33333333333333" || 
            cnpj == "44444444444444" || 
            cnpj == "55555555555555" || 
            cnpj == "66666666666666" || 
            cnpj == "77777777777777" || 
            cnpj == "88888888888888" || 
            cnpj == "99999999999999")
            return false;
             
        // Valida DVs
        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0,tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
             
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
              return false;
               
        return true;
    }

    const cnpjChange = function(){
        if(!validaCNPJ(cnpj)){
            setDoc('');
            alert("CNPJ inválido");
        }
    }

=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
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

<<<<<<< HEAD
        const cnpj = docCliente.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5");
        useEffect(()=>{

        },[msg])

    return(
        <div>
            <form onSubmit={handleSubmit(cadCliente)}>
                <div className="row">
                    <div className="col-md-4">
                        <label >Nome do Cliente:</label>
                        <input className="form-control" type="text" value={nomeCliente} onChange={(e)=>setNome(e.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label >Fone:</label>
                        <input className="form-control" type="text"   value={foneCliente} onChange={(e)=>setFone(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label >CNPJ: </label>
                        <input onBlur={cnpjChange} className="form-control" type="text" placeholder="12.345.567/0001-99" value={cnpj} pattern={'[,0-9,][@-#-$]+$'} minLength={14} maxLength={14} onChange={(e)=>setDoc(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label >Inscrição Estadual: </label>
                        <input className="form-control" type="text"   value={ie} pattern={'[,0-9,][@-#-$]+$'} minLength={11} maxLength={11} onChange={(e)=>setIE(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label >Email:</label>
                        <input className="form-control" type="text"   value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label >Senha:</label>
                        <input className="form-control" type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                    </div>  
                </div> 
                <div className="row">
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-success min-300 mt-3">Enviar</button>
                    </div>
                </div>  
            </form>
            <label >{msg}</label>
        </div>
=======
        
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

            
        

>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
    )
}

export default CadClienteJurudico;

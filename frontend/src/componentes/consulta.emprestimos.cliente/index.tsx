
import CadCliente from "../cad.cliente";
import {Route,Routes,Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import {useForm} from  'react-hook-form';
import { Emprestimo } from "../models/emprestimo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ConsultaEmprestimosCliente(){
    const [listaEmprestimos,setListaEmprestimos] = useState<Emprestimo[]>([]);
    const {register, handleSubmit} = useForm()
    const [emprestimoDevolvido,setEmprestimoDevolvido] = useState<Emprestimo>();
    const [docCliente,setDoc] = useState('');
    const [senha,setSenha] = useState('');


    const consulta= (dados: any)=> axios.get(
        `${BASE_URL}/consultaemp?documento=${docCliente}&senha=${senha}`).then(response => {
            console.log(response.data);
            setListaEmprestimos(response.data);
            setDoc('');
            setSenha('');
       

        });

        

            useEffect(()=>{
                
                
        
                       
                
            },[listaEmprestimos])

    return(
        

            <div>
                <Link to={"/"}> Inicio</Link>
                <h1>Seus emprestimos Abertos</h1>
                <form onSubmit={handleSubmit(consulta)} >
                <label >Documento</label>
                    <input type="number" value={docCliente} onChange={(e)=>setDoc(e.target.value)} />

                    <label >Senha</label>
                    <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                    <button type="submit">Enviar</button>
                </form>
                <table>
                   
                    <tbody>
                        {
                            listaEmprestimos.map(emprestimo=>{
                                return(
                            <tr key={emprestimo.id}>
                            <td>ID:{emprestimo.id}</td>
                            <td>Valor do Emprestimo: R${emprestimo.valor}</td>
                            <td><Link to={`/detalhesemp/${emprestimo.id}`}>Verificar Mais Informações</Link></td>
                        </tr>
                                )
                            })
                        }
                    
                    
                    </tbody>
                        
                </table>

                
            </div>
        

    )
}

export default ConsultaEmprestimosCliente;


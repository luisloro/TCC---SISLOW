
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

function ListaEmprestimosCliente(){
    const {id} = useParams();
    const [listaEmprestimos,setListaEmprestimos] = useState<Emprestimo[]>([]);
    const {register, handleSubmit} = useForm()
    const [emprestimoDevolvido,setEmprestimoDevolvido] = useState<Emprestimo>();
    const devolveEmprestimo = (idemp: number)=> axios.post(
        `${BASE_URL}/devolveemp?id=${idemp}`).then(response => {
           setEmprestimoDevolvido(response.data);
                
        });

            useEffect(()=>{
               
                axios.get(
                    `${BASE_URL}/emprestimoscliente?id=${id}`).then(response => {
                        console.log(response.data);
                        setListaEmprestimos(response.data);
                        
                    });
        
                       
                
            },[emprestimoDevolvido])

    return(
        

            <div>
                <h1>Todos Emprestimos do Cliente</h1>



                <table>
                    <thead>
                    <tr>
                            <th>Teste</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaEmprestimos.map(emprestimo=>{
                                return(
                            <tr key={emprestimo.id}>
                            <td>ID:{emprestimo.id}</td>
                            <td>Valor do Emprestimo: R${emprestimo.valor}</td>
                            <td><Link to={`/detalhesemp/${emprestimo.id}`}>Verificar Mais Informações</Link></td>
                            {emprestimo.emprestado && (<div><p>Emprestimo Aberto</p></div>)}
                            {emprestimo.emprestado && (<td><button onClick={()=>devolveEmprestimo(emprestimo.id)}>Finalizar Emprestimo</button></td>)}
                        </tr>
                            
                                )
                            })
                        }
                    
                    
                    </tbody>
                        
                </table>

                
            </div>
        

    )
}

export default ListaEmprestimosCliente;


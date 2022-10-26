
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

function ListaEmprestimoAbertos(){
    const [listaEmprestimos,setListaEmprestimos] = useState<Emprestimo[]>([]);
    const {register, handleSubmit} = useForm()
    const [emprestimoDevolvido,setEmprestimoDevolvido] = useState<Emprestimo>();
    const datainicio = new Date();
    const datafim = new Date(new Date().setDate(new Date().getDate() +7));
    const [inicio, setInicio] = useState(datainicio);
    const [fim, setFim] = useState(datafim);

    

        const devolveEmprestimo = (idemp: number)=> axios.post(
            `${BASE_URL}/devolveemp?id=${idemp}`).then(response => {
               setEmprestimoDevolvido(response.data);
                    
            });

            useEffect(()=>{
                const dinicio = inicio.toISOString().slice(0,10);
                const dfim = fim.toISOString().slice(0,10);
                axios.get(
                    `${BASE_URL}/emprestimosabertos?datainicio=${dinicio}&datafim=${dfim}`).then(response => {
                        console.log(response.data);
                        setListaEmprestimos(response.data);
                        console.log(fim);
                        
                    });
        
                       
                
            },[emprestimoDevolvido,inicio,fim])

    return(
        

            <div>
                <h1>Consulta de Emprestimos Abertos No Periodo Selecionado</h1>

                

                <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={inicio}
                            onChange={(date: Date) => setInicio(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={fim}
                            onChange={(date: Date) => setFim(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                <table>
                    
                    <tbody>
                        {
                            listaEmprestimos.map(emprestimo=>{
                                return(
                            <tr key={emprestimo.id}>
                            <td>Cliente:{emprestimo.cliente.nome}</td>
                            <td>ID:{emprestimo.id}</td>
                            <td>Valor do Emprestimo: R${emprestimo.valor}</td>
                            <td><Link to={`/detalhesemp/${emprestimo.id}`}>Verificar Mais Informações</Link></td>
                            <td><Link to={`/contratoemp/${emprestimo.id}`}>Contrato de emprestimo</Link></td>
                            <td><button onClick={()=>devolveEmprestimo(emprestimo.id)}>Finalizar Emprestimo</button></td>
                        </tr>
                                )
                            })
                        }
                    
                    
                    </tbody>
                        
                </table>
            </div>
        

    )
}

export default ListaEmprestimoAbertos;


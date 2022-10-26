
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

function ListaEmprestimosAtrasados(){
    const [listaEmprestimos,setListaEmprestimos] = useState<Emprestimo[]>([]);
    const {register, handleSubmit} = useForm()
    const [emprestimoDevolvido,setEmprestimoDevolvido] = useState<Emprestimo>();
    const data = new Date();
    
    const [dataatual, setDataAtual] = useState(data);
    

    

            useEffect(()=>{
                const atual = dataatual.toISOString().slice(0,10);
                axios.get(
                    `${BASE_URL}/emprestimosatrasados?data=${atual}`).then(response => {
                        console.log(response.data);
                        setListaEmprestimos(response.data);
                        
                    });
        
                       
                
            },[dataatual])

    return(
        

            <div>
                <h1>Consulta de Emprestimos Atrasados</h1>

                

                <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={dataatual}
                            onChange={(date: Date) => setDataAtual(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    
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
                            <td>Cliente:{emprestimo.cliente.nome}</td>
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

export default ListaEmprestimosAtrasados;



import CadCliente from "../cad.cliente";
import {Route,Routes,Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import {useForm} from  'react-hook-form';

function ListaCliente(){
    const [lista,setLista] = useState<Cliente[]>([]);
    const {register, handleSubmit} = useForm()

    const consultaCliente = (dados: any)=> axios.get(
        `${BASE_URL}/cliente`).then(response => {
            console.log(response.data);
            setLista(response.data);
            
        });

    return(
        

            <div>
                <h1>Consulta de Clientes</h1>

                <form onSubmit={handleSubmit(consultaCliente)} >

        
                    <button type="submit">Consultar</button>
                </form>


                <table>
                    <thead>
                    <tr>
                            <th>Teste</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lista.map(cliente=>{
                                return(
                            <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>teste</td>
                            <td><Link to={`/cademp/${cliente.id}`}> Novo Emprestimo </Link></td>
                            <td><Link to={`/editcli/${cliente.id}`}> Edita Cliente </Link></td>
                        </tr>
                                )
                            })
                        }
                    
                    
                    </tbody>
                        
                </table>
            </div>
        

    )
}

export default ListaCliente;


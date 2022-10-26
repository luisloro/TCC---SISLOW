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

    const [nomeCliente,setNome] = useState('');

    const consultaCliente = (dados: any)=> axios.get(
        `${BASE_URL}/cliente`).then(response => {
            console.log(response.data);
            setLista(response.data);
            
        });

        const buscaCliente = (dados: any)=> axios.get(
            `${BASE_URL}/buscaCliente?nome=${nomeCliente}`).then(response => {
                console.log(response.data);
                setLista(response.data);
                
            });
            useEffect(()=>{

                axios.get(
                    `${BASE_URL}/equipamento`).then(response => {
                        
            
            });
                        
        
                       
                
            })
            

    return(
        

            <div>
                <h1>Consulta de Clientes</h1>

                <form onSubmit={handleSubmit(consultaCliente)} >

        
                    <button type="submit">Consultar Todos</button>
                </form>

                <form onSubmit={handleSubmit(buscaCliente)} >
                    <label >Nome do Cliente</label>
                    <input type="text" value={nomeCliente} onChange={(e)=>setNome(e.target.value)}/>

                    <button type="submit">Buscar</button>
                </form>

                <table>
                    <thead>
                    <tr>
                            <th>Clientes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lista.map(cliente=>{
                                return(
                            <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            {!cliente.tipo && (<td>{cliente.cpf}</td>)}
                            {cliente.tipo && (<td>{cliente.cnpj}</td>)}
                            <td>teste</td>
                            <td><Link to={`/cademp/${cliente.id}`}> Novo Emprestimo </Link></td>
                            <td><Link to={`/editcli/${cliente.id}`}> Edita Cliente </Link></td>
                            <td><Link to={`/empcli/${cliente.id}`}> Emprestimos do Cliente </Link></td>
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


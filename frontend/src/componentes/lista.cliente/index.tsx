import CadCliente from "../cad.cliente";
import { Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import { useForm } from 'react-hook-form';
import { GiCog } from "react-icons/gi";

function ListaCliente() {
    const [lista, setLista] = useState<Cliente[]>([]);
    const { register, handleSubmit } = useForm()

<<<<<<< HEAD
    const [nomeCliente, setNome] = useState('');

    const consultaCliente = (dados: any) => axios.get(
=======
    const [nomeCliente,setNome] = useState('');

    const consultaCliente = (dados: any)=> axios.get(
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
        `${BASE_URL}/cliente`).then(response => {
            console.log(response.data);
            setLista(response.data);

        });

<<<<<<< HEAD
    const buscaCliente = (dados: any) => axios.get(
        `${BASE_URL}/buscaCliente?nome=${nomeCliente}`).then(response => {
            console.log(response.data);
            setLista(response.data);
=======
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
        
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6

        });
    useEffect(() => {
        axios.get(
            `${BASE_URL}/equipamento`).then(response => { });
    })

    return (
        <div>
            <h3>Consulta de Clientes</h3>

<<<<<<< HEAD
            <form onSubmit={handleSubmit(buscaCliente)} >
                <div className="row">
                    <div className="col-md-4">
                        <div className="input-group mb-3">
                            <input className="form-control " type="text" value={nomeCliente} onChange={(e) => setNome(e.target.value)} />
                            <button className="btn btn-dark" type="submit">Buscar</button>
                        </div>
                    </div>
                </div>
            </form>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>CPF/CNPJ</th>
                        <th><GiCog /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(cliente => {
                            return (
                                <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    {!cliente.tipo && (<td>{cliente.cpf}</td>)}
                                    {cliente.tipo && (<td>{cliente.cnpj}</td>)}
                                    <td>
                                        <Link className="btn btn-outline-primary btn-sm ms-1" to={`/cademp/${cliente.id}`}> Novo Emprestimo </Link>
                                        <Link className="btn btn-outline-primary btn-sm ms-1" to={`/editcli/${cliente.id}`}> Edita Cliente </Link>
                                        <Link className="btn btn-outline-primary btn-sm ms-1" to={`/empcli/${cliente.id}`}> Emprestimos do Cliente </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
=======
        
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
        

>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
    )
}

export default ListaCliente;

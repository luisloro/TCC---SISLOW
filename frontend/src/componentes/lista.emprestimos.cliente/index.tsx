
import CadCliente from "../cad.cliente";
<<<<<<< HEAD
import {Route,Routes,Link} from "react-router-dom";
import {useParams} from "react-router-dom";
=======
<<<<<<< HEAD
import { Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
=======
import {Route,Routes,Link} from "react-router-dom";
import {useParams} from "react-router-dom";
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useForm } from 'react-hook-form';
import { Emprestimo } from "../models/emprestimo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GiCog } from "react-icons/gi";

function ListaEmprestimosCliente() {
    const { id } = useParams();
    const [listaEmprestimos, setListaEmprestimos] = useState<Emprestimo[]>([]);
    const { register, handleSubmit } = useForm()
    const [emprestimoDevolvido, setEmprestimoDevolvido] = useState<Emprestimo>();
    const devolveEmprestimo = (idemp: number) => axios.post(
        `${BASE_URL}/devolveemp?id=${idemp}`).then(response => {
            setEmprestimoDevolvido(response.data);

        });

    useEffect(() => {

        axios.get(
            `${BASE_URL}/cliente/emprestimos/${id}`).then(response => {
                console.log(response.data);
                setListaEmprestimos(response.data);
            });



    }, [emprestimoDevolvido])

    return (

        <div>
            <h3>Todos Empréstimos do Cliente</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Valor do Empréstimo:</th>
                        <th><GiCog /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaEmprestimos.map(emprestimo => {
                            return (
                                <tr key={emprestimo.id}>
                                    <td>{emprestimo.id}</td>
                                    <td>R${emprestimo.valor.toFixed(2)}</td>
                                    <td><Link className="btn btn-outline-primary btn-sm ms-2" to={`/detalhesemp/${emprestimo.id}`}>Verificar Mais Informações</Link></td>
                                    <td>{emprestimo.emprestado && (<div className="btn btn-outline-primary btn-sm ms-2">Emprestimo Aberto</div>)}</td>
                                    <td>{emprestimo.emprestado && (<button className="btn btn-outline-danger btn-sm ms-2" onClick={() => devolveEmprestimo(emprestimo.id)}>Finalizar Emprestimo</button>)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
=======
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
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
        

<<<<<<< HEAD
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
    )
}

export default ListaEmprestimosCliente;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170


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

function ListaEmprestimos() {
    const [listaEmprestimos, setListaEmprestimos] = useState<Emprestimo[]>([]);
    const { register, handleSubmit } = useForm()
    const [emprestimoDevolvido, setEmprestimoDevolvido] = useState<Emprestimo>();

    const datainicio = new Date();
    const datafim = new Date(new Date().setDate(new Date().getDate() + 7));
    const [inicio, setInicio] = useState(datainicio);
    const [fim, setFim] = useState(datafim);



    const devolveEmprestimo = (idemp: number) => axios.post(
        `${BASE_URL}/devolveemp?id=${idemp}`).then(response => {
            setEmprestimoDevolvido(response.data);

        });

    useEffect(() => {
        const dinicio = inicio.toISOString().slice(0, 10);
        const dfim = fim.toISOString().slice(0, 10);
        axios.get(
            `${BASE_URL}/emprestimospordata?datainicio=${dinicio}&datafim=${dfim}`).then(response => {
                console.log(response.data);
                console.log(response.data);
                setListaEmprestimos(response.data);

            });



    }, [inicio, fim])

    return (

        <div>
            <h3>Todos Empréstimos Por Período</h3>
            <div><p></p></div>
            <div className="row">
                <div className="col-md-2">
                    <th>Data Início:</th>
                </div>
                <div className="col-md-2">
                    <th>Data Fim:</th>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <DatePicker
                        selected={inicio}
                        onChange={(date: Date) => setInicio(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="col-md-2">
                    <DatePicker
                        selected={fim}
                        onChange={(date: Date) => setFim(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div className="row"><div className="col"><br /></div></div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cliente:</th>
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
                                    <td>{emprestimo.cliente.nome}</td>
                                    <td>R${emprestimo.valor.toFixed(2)}</td>
                                    <td><Link className="btn btn-outline-primary btn-sm ms-1" to={`/detalhesemp/${emprestimo.id}`}>Verificar Mais Informações</Link></td>
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

function ListaEmprestimos(){
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
                    `${BASE_URL}/emprestimospordata?datainicio=${dinicio}&datafim=${dfim}`).then(response => {
                        console.log(response.data);
                        console.log(response.data);
                        setListaEmprestimos(response.data);
                        
                    });
        
                       
                
            },[inicio,fim])

    return(
        

            <div>
                <h1>Todos Emprestimos Por Periodo</h1>

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
        

<<<<<<< HEAD
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
    )
}

export default ListaEmprestimos;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170

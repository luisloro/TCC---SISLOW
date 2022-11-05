
import CadCliente from "../cad.cliente";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import { useForm } from 'react-hook-form';
import { Emprestimo } from "../models/emprestimo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GiCog } from "react-icons/gi";
import { AuthContext } from "../contexts/AuthContext";

function ListaEmprestimosAtrasados() {
    const [listaEmprestimos, setListaEmprestimos] = useState<Emprestimo[]>([]);
    const { register, handleSubmit } = useForm()
    const [emprestimoDevolvido, setEmprestimoDevolvido] = useState<Emprestimo>();
    const data = new Date();

    const [dataatual, setDataAtual] = useState(data);

    const auth = useContext(AuthContext);


    useEffect(() => {
        const atual = dataatual.toISOString().slice(0, 10);

        let url = (auth.user && auth.user.type == "ADMIN") ?
        `${BASE_URL}/emprestimosatrasados?data=${atual}` :
        `${BASE_URL}/emprestimosatrasadoscliente?idCliente=${auth.user.id}&datafim=${atual}`;
        axios.get(url).then(response => {
                console.log(response.data);
                setListaEmprestimos(response.data);

            });



    }, [dataatual])

    return (

        <div>
            <h3>Consulta de Empréstimos Atrasados</h3>
            <div><p></p></div>
            <div className="row">
                <div className="col-md-2">
                    <DatePicker
                        selected={dataatual}
                        onChange={(date: Date) => setDataAtual(date)}
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
        

<<<<<<< HEAD
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
    )
}

export default ListaEmprestimosAtrasados;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170

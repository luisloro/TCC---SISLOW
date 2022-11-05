
import CadCliente from "../cad.cliente";
import { Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
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
    )
}

export default ListaEmprestimosCliente;


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
import { Equipamento } from "../models/equipamentol";
import { Emprestimo } from "../models/emprestimo";
function DetalheEmprestimo() {

    const [cliente, setCliente] = useState<Cliente[]>([]);
    const { id } = useParams();
    const { register, handleSubmit } = useForm()

    const [nomeCliente, setNome] = useState('');

    const [valor, setValor] = useState('');
    const [idEmprestimo, setIdEmprestimo] = useState('');
    const [datainicio, setDataInicio] = useState('');
    const [datafim, setDataFim] = useState('');

    const [listaEquipamento, setListaEquipamento] = useState<Equipamento[]>([]);

    const formatDate = function(date:any){
        // Adiciono 3 horas porque o horário que vem do backend é UTC (-3h). 
        // Não é a melhor forma de resolver - considere trocar essa função por uma lib de data.
        date.setHours(date.getHours() + 3, 0, 0, 0);

        var d = date.getDate();
        var m = date.getMonth() + 1; //Month from 0 to 11
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '/' + (m<=9 ? '0' + m : m) + '/' + y;
    }

    useEffect(() => {
=======
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
import {useForm} from  'react-hook-form';
import { Equipamento } from "../models/equipamentol";
import { Emprestimo } from "../models/emprestimo";
function DetalheEmprestimo(){

    const [cliente,setCliente] = useState<Cliente[]>([]);
    const {id} = useParams();
    const {register, handleSubmit} = useForm()

    const [nomeCliente,setNome] = useState('');

    const [valor,setValor] = useState('');
    const [idEmprestimo,setIdEmprestimo] = useState('');
    const [datainicio,setDataInicio] = useState('');
    const [datafim,setDataFim] = useState('');

    const [listaEquipamento,setListaEquipamento] = useState<Equipamento[]>([]);

    

    useEffect(()=>{
<<<<<<< HEAD
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170

        axios.get(
            `${BASE_URL}/emprestimo/${id}`).then(response => {
                setValor(response.data.valor);
                setIdEmprestimo(response.data.id);
                setDataInicio(response.data.datainicio);
                setDataFim(response.data.datafim);
                console.log(response.data.datafim);
                console.log(datainicio);
            });

<<<<<<< HEAD
=======
<<<<<<< HEAD
        axios.get(
            `${BASE_URL}/recuperacli/${id}`).then(response => {
                setNome(response.data.nome);
            });

        axios.get(
            `${BASE_URL}/recuperaequips/${id}`).then(response => {
                setListaEquipamento(response.data);
            });
    }, [])
=======
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
            axios.get(
                `${BASE_URL}/recuperacli/${id}`).then(response => {
                    setNome(response.data.nome);
                });

            axios.get(
                `${BASE_URL}/recuperaequips/${id}`).then(response => {
                    setListaEquipamento(response.data);
                });
    },[])
<<<<<<< HEAD
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170




<<<<<<< HEAD
=======
<<<<<<< HEAD
    return (

        <div>
            <h3>Detalhes do Empréstimo</h3>
            <div><p></p></div>
            <form >
                <div className="row">
                    <div className="col-md-2">
                        <div className="form-control">
                            <th>Cliente:</th>
                            <label>{nomeCliente}</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-control">
                            <th>Número Emprestimo:</th>
                            <label>{idEmprestimo}</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-control">
                            <th>Valor do Empréstimo(R$):</th>
                            <label>{valor}</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-control">
                            <th>Data Inicio:</th>
                            <label >{formatDate(new Date(datainicio))}</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-control">
                            <th>Data fim:</th>
                            <label >{formatDate(new Date(datafim))}</label>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row"><div><br /></div></div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Equipamentos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaEquipamento.map(equipamento => {
                            return (
                                <tr key={equipamento.id}>
                                    <td>{equipamento.id}</td>
                                    <td>{equipamento.modelo}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
=======
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
    return(
        
            
            <div>
                <h1>Detalhes do Emprestimo</h1>
                <form >

                    <label >Cliente: {nomeCliente}</label>
                    <label > Número Emprestimo: {idEmprestimo}</label>
                    

                    <label > Valor: {valor}</label>

                    <label > Data Inicio: {datainicio}</label>

                    <label > Data fim: {datafim}</label>
                   
                </form>

                <table>
                    <thead>
                    <tr>
                            <th>Equipamentos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaEquipamento.map(equipamento=>{
                                return(
                            <tr key={equipamento.id}>
                            <td>{equipamento.id}</td>
                            <td>{equipamento.modelo}</td>
                            
                            
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

export default DetalheEmprestimo;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170

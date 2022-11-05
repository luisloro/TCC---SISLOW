
import CadCliente from "../cad.cliente";
<<<<<<< HEAD
import { Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
=======
import {Route,Routes,Link} from "react-router-dom";
import {useParams} from "react-router-dom";
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
<<<<<<< HEAD
import { useForm } from 'react-hook-form';
=======
import {useForm} from  'react-hook-form';
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
import { Equipamento } from "../models/equipamentol";
import { Emprestimo } from "../models/emprestimo";


<<<<<<< HEAD
function ContratoEmprestimo() {

    const [cliente, setCliente] = useState<Cliente[]>([]);
    const { id } = useParams();
    const { register, handleSubmit } = useForm()
    const [emprestimo, setEmprestimo] = useState<Emprestimo>();
    const [nomeCliente, setNome] = useState('');

    const [valor, setValor] = useState('');
    const [idEmprestimo, setIdEmprestimo] = useState('');
    const [datainicio, setDataInicio] = useState('');
    const [datafim, setDataFim] = useState('');
    const [data, setData] = useState('');

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
function ContratoEmprestimo(){

    const [cliente,setCliente] = useState<Cliente[]>([]);
    const {id} = useParams();
    const {register, handleSubmit} = useForm()
    const [emprestimo,setEmprestimo] = useState<Emprestimo>();
    const [nomeCliente,setNome] = useState('');

    const [valor,setValor] = useState('');
    const [idEmprestimo,setIdEmprestimo] = useState('');
    const [datainicio,setDataInicio] = useState('');
    const [datafim,setDataFim] = useState('');
    const [data,setData] = useState('');

    const [listaEquipamento,setListaEquipamento] = useState<Equipamento[]>([]);

    

    useEffect(()=>{
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6

        axios.get(
            `${BASE_URL}/emprestimo/${id}`).then(response => {
                setEmprestimo(response.data);
                setDataInicio(response.data.datainicio);
                setDataFim(response.data.datafim);
<<<<<<< HEAD

            });



        axios.get(
            `${BASE_URL}/recuperaequips/${id}`).then(response => {
                setListaEquipamento(response.data);
            });
    }, [])
=======
                
            });

            

            axios.get(
                `${BASE_URL}/recuperaequips/${id}`).then(response => {
                    setListaEquipamento(response.data);
                });
    },[])
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6




<<<<<<< HEAD
    return (

        <div>
            <h3>Contrato de Empréstimo</h3>
            <form>

                <label >
                    <div className="form-control">
                        <p>
                            O Cliente <b>{emprestimo?.cliente.nome}</b> se responsabiliza pelo <b>empréstimo
                            de número {emprestimo?.id} </b>no <b>valor de R$ {emprestimo?.valor.toFixed(2)}</b>,
                            sendo realizado na data de <b>{formatDate(new Date(datainicio))}</b> e com data de finalização do empréstimo
                            e a entrega do(s) equipamento(s) na data de <b>{formatDate(new Date(datafim))}</b>.
                        </p>
                    </div>
                </label>

            </form>
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
    return(
        
            
            <div>
                <h1>Contrato de Emprestimo</h1>
                <form >

                    <label >O Cliente {emprestimo?.cliente.nome} se responssabiliza pelo emprestimo de numero {emprestimo?.id}
                    no valor de R${emprestimo?.valor}, sendo realizado na data de {data} e com data de finalização do emprestimo e entraga dos equipamentos
                    na data de {datafim}</label>
                
                    
                    


                   
                   
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
        

>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
    )
}

export default ContratoEmprestimo;
<<<<<<< HEAD
=======

>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6

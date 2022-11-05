
import CadCliente from "../cad.cliente";
<<<<<<< HEAD
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
=======
import {Route,Routes,Link,useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Equipamento } from "../models/equipamentol";

<<<<<<< HEAD
function CadastraEmprestimo() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const [lista, setLista] = useState<Equipamento[]>([]);
    const [equipamentos, setEquipamentos] = useState<[]>([]);
    const [listatemp, setListaTemp] = useState<Equipamento[]>([]);
=======
function CadastraEmprestimo(){
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const {id} = useParams();
    const [lista,setLista] = useState<Equipamento[]>([]);
    const [listatemp,setListaTemp] = useState<Equipamento[]>([]);
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
    const datainicio = new Date();
    const datafim = new Date(new Date().setDate(new Date().getDate() + 7));
    const [inicio, setInicio] = useState(datainicio);
    const [fim, setFim] = useState(datafim);

<<<<<<< HEAD
    const [nomeCliente, setNome] = useState('');
    const [foneCliente, setFone] = useState('');
    const [cpfCliente, setCPF] = useState('');
    const [valor, setValor] = useState('');
    const [msg, setMsg] = useState('');
    const [modelo, setModelo] = useState('');
    const cadastra = (dados: any)=> {
        const dinicio = inicio.toISOString().slice(0,10);
        const dfim = fim.toISOString().slice(0,10);
        console.log(dfim)
        axios.post(
            `${BASE_URL}/cademprestimo?valor=${valor}&idCliente=${id}&datainicio=${dinicio}&datafim=${dfim}`).then(response => {
                const menssagem = response.data;
                if(menssagem == "Emprestimo Realizado")
                {
                    setValor('');
                    setInicio(datainicio);
                    navigate('/listacli');
                    setListaTemp([]);
                }           
                    alert(menssagem);
                    axios.get(
                        `${BASE_URL}/listaequipamentos`).then(response => {
                            setListaTemp(response.data);
                        });
                
            });
            setValor('');
             setInicio(datainicio);
             
             setListaTemp([]);
             
            

}

    const buscaEquipamento = (dados: any) => axios.get(
        `${BASE_URL}/buscaEquipamentoPorModelo?modelo=${modelo}`).then(response => {
            setLista(response.data);
            setModelo('');
=======
    const [nomeCliente,setNome] = useState('');
    const [foneCliente,setFone] = useState('');
    const [cpfCliente,setCPF] = useState('');
    const [valor,setValor] = useState('');
    const [msg,setMsg] = useState('');
    const [modelo,setModelo] = useState('');
    const cadastra = (dados: any)=> {
                const dinicio = inicio.toISOString().slice(0,10);
                const dfim = fim.toISOString().slice(0,10);
                console.log(dfim)
                axios.post(
                    `${BASE_URL}/cademprestimo?valor=${valor}&idCliente=${id}&datainicio=${dinicio}&datafim=${dfim}`).then(response => {
                        const menssagem = response.data;
                        if(menssagem == "Emprestimo Realizado")
                        {
                            setValor('');
                            setInicio(datainicio);
                            navigate('/listacli');
                            setListaTemp([]);
                        }           
                            alert(menssagem);
                        
                    });
                    setValor('');
                     setInicio(datainicio);
                     
                     setListaTemp([]);
                     
                    

    }

    const buscaEquipamento = (dados: any)=> axios.get(
        `${BASE_URL}/buscaEquipamentoPorModelo?modelo=${modelo}`).then(response => {
            setLista(response.data);
            setModelo('');
            
        });

    const pucharEquipamentos=()=>axios.get(
        `${BASE_URL}/itenstemp`).then(response => {
            setLista(response.data);
            
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6

        });

    const pucharEquipamentos = () => axios.get(
        `${BASE_URL}/itenstemp`).then(response => {
            setLista(response.data);


        });


    const adicionaLista = (idequip: number) => axios.post(
        `${BASE_URL}/addequip?idEquipamento=${idequip}`).then(response => {
            axios.get(
                `${BASE_URL}/listaequipamentos`).then(response => {
<<<<<<< HEAD
=======
                    
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
                    setListaTemp(response.data);
                });
                axios.post(
                `   ${BASE_URL}/removeequip?id=${idequip}`).then(response => {
                        console.log(idequip);
                        setLista(response.data);
                });

                let equipamentosTemp = equipamentos;
                equipamentosTemp.push(idequip);
                setEquipamentos(equipamentosTemp);

        });

<<<<<<< HEAD
    const removeLista = async (idequip: number) => await
=======
        const removeLista  = async (idequip: number)=> await 
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
        axios.post(
            `${BASE_URL}/voltaequip?idEquipamento=${idequip}`).then(response => {
                console.log(idequip);
                setLista(response.data);

<<<<<<< HEAD
                axios.post(
                    `${BASE_URL}/removeequiptemp?idEquipamento=${idequip}`).then(response => {

                    });
                axios.get(
                    `${BASE_URL}/listaequipamentos`).then(response => {
                        setListaTemp(response.data);
                    });

                    let equipamentosTemp = equipamentos;
                    let index = equipamentosTemp.indexOf(idequip);
                    if (index > -1) {
                        equipamentosTemp.splice(index, 1);
                    }
                    setEquipamentos(equipamentosTemp);
            });


    useEffect(() => {
=======
            
            axios.post(
            `${BASE_URL}/removeequiptemp?idEquipamento=${idequip}`).then(response => {
                
            });
                axios.get(
                    `${BASE_URL}/listaequipamentos`).then(response => {
                        
                        setListaTemp(response.data);
                        
                    });
            
        });
           

    useEffect(()=>{
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6

        axios.get(
            `${BASE_URL}/cliente/${id}`).then(response => {

                setNome(response.data.nome);
                setCPF(response.data.cpf);
                setFone(response.data.fone);
<<<<<<< HEAD


            });


        axios.get(
            `${BASE_URL}/listaequipamentos`).then(response => {

                setListaTemp(response.data);

            });
=======
                
                
            });

            
                axios.get(
                    `${BASE_URL}/listaequipamentos`).then(response => {
                        
                        setListaTemp(response.data);
                        
                    });

                

               
        
    },[lista,valor])
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6





<<<<<<< HEAD
    }, [lista, valor])
=======
                    <label >{foneCliente}</label>
                    <label >-------</label>
                    <label >{cpfCliente}</label>

                    <label >Valor Emprestimo: </label>
                    <input type="number" value={valor} onChange={(e)=>setValor(e.target.value)}/>
                    <button type="submit">Enviar</button>
                    
                </form>
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6


<<<<<<< HEAD


    return (

        <div>
            {/* <h3>Cliente</h3> */}
            <form onSubmit={handleSubmit(cadastra)}>
                <div className="row">
                    <div className="col-md-3">
                        <th>Nome:</th>
                        <label className="form-control">{nomeCliente}</label>
=======
                <form onSubmit={handleSubmit(buscaEquipamento)} >
                    <label >Busca por Modelo do Equipamento</label>
                    <input type="text" value={modelo} onChange={(e)=>setModelo(e.target.value)}/>


                    <button type="submit">Buscar</button>
                </form>

                <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={inicio}
                            onChange={(date: Date) => setInicio(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
                    </div>
                    <div className="col-md-3">
                        <th>CPF:</th>
                        <label className="form-control">{cpfCliente}</label>
                    </div>
                    <div className="col-md-3">
                        <th>Telefone:</th>
                        <label className="form-control">{foneCliente}</label>
                    </div>
                </div>

<<<<<<< HEAD
            </form>
            <div className="row"><div><br /></div></div>
            <h3>Novo Empréstimo</h3>
            <div className="row">
                <div className="col-md-2">
                    <th>Data Inicial:</th>
                    <DatePicker
                        selected={inicio}
                        onChange={(date: Date) => setInicio(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="col-md-2">
                    <th>Data Final:</th>
                    <DatePicker
                        selected={fim}
                        onChange={(date: Date) => setFim(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
=======
                    <table>
                    <thead>
                    <tr>
                            <th>Equipamentos disponiveis</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lista.map(equipamento=>{
                                return(
                            <tr key={equipamento.id}>
                            <td>{equipamento.id}</td>
                            <td>{equipamento.modelo}</td>
                            <td><button onClick={()=>adicionaLista(equipamento.id)}>Adiciona</button></td>
                            
                            
                        </tr>
                                )
                            })
                        }
                    
                    
                    </tbody>
                        
                </table>


                <table>
                    <thead>
                    <tr>
                            <th>Itens Adicionados para Emprestimo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listatemp.map(equipamento=>{
                                return(
                            <tr >
                            <td>{equipamento.id}</td>
                            <td>{equipamento.modelo}</td>
                            <td><button onClick={()=>removeLista(equipamento.id)}>Remove</button></td>
                        </tr>
                                )
                            })
                        }
                    
                    
                    </tbody>
                        
                </table>
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
            </div>
            <div><p></p></div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Itens Adicionados para Emprestimo:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listatemp.map(equipamento => {
                            return (
                                <tr>
                                    <td>{equipamento.id}</td>
                                    <td>{equipamento.modelo}</td>
                                    <td><button className="btn btn-outline-danger btn-sm ms-1" onClick={() => removeLista(equipamento.id)}>Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="row">
                <div className="col-md-3">
                    <th>Valor Empréstimo: </th>
                    <div className="input-group mb-1">
                        <input className="form-control" type="number"  required value={valor} onChange={(e) => setValor(e.target.value)} />
                        <button onClick={cadastra} className="btn btn-success" type="submit">Enviar</button>
                    </div>
                </div>
            </div>
            <hr/>
            <form onSubmit={handleSubmit(buscaEquipamento)} >
                <div className="row">
                    <div className="col-md-5">
                        <th>Busca por Modelo do Equipamento:</th>
                        <div className="input-group mb-1">
                            <input className="form-control" type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                            {/*<button className="btn btn-dark" type="submit">Buscar</button>*/}
                            <button className="btn btn-dark" onClick={pucharEquipamentos}>Listar Todos</button>
                        </div>
                    </div>
                </div>
            </form>
            <div><p></p></div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Equipamentos disponiveis</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(equipamento => {
                            return (
                                <tr key={equipamento.id}>
                                    <td>{equipamento.id}</td>
                                    <td>{equipamento.modelo}</td>
                                    <td><button className="btn btn-outline-primary btn-sm ms-1" onClick={() => adicionaLista(equipamento.id)}>Adiciona</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CadastraEmprestimo;

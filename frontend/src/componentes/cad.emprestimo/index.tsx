
import CadCliente from "../cad.cliente";
import {Route,Routes,Link,useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import {useForm} from  'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Equipamento } from "../models/equipamentol";

function CadastraEmprestimo(){
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const {id} = useParams();
    const [lista,setLista] = useState<Equipamento[]>([]);
    const [listatemp,setListaTemp] = useState<Equipamento[]>([]);
    const datainicio = new Date();
    const datafim = new Date(new Date().setDate(new Date().getDate() +7));
    const [inicio, setInicio] = useState(datainicio);
    const [fim, setFim] = useState(datafim);

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
            

});
    

    const adicionaLista = (idequip: number)=> axios.post(
        `${BASE_URL}/addequip?idEquipamento=${idequip}`).then(response => {
           

            axios.get(
                `${BASE_URL}/listaequipamentos`).then(response => {
                    
                    setListaTemp(response.data);
                    
                });
                axios.post(
                    `${BASE_URL}/removeequip?id=${idequip}`).then(response => {
                        console.log(idequip);
                        setLista(response.data);

        });
                
        });

        const removeLista  = async (idequip: number)=> await 
        axios.post(
            `${BASE_URL}/voltaequip?idEquipamento=${idequip}`).then(response => {
                console.log(idequip);
                setLista(response.data);

            
            axios.post(
            `${BASE_URL}/removeequiptemp?idEquipamento=${idequip}`).then(response => {
                
            });
                axios.get(
                    `${BASE_URL}/listaequipamentos`).then(response => {
                        
                        setListaTemp(response.data);
                        
                    });
            
        });
           

    useEffect(()=>{

        axios.get(
            `${BASE_URL}/cliente/${id}`).then(response => {
              
                setNome(response.data.nome);
                setCPF(response.data.cpf);
                setFone(response.data.fone);
                
                
            });

            
                axios.get(
                    `${BASE_URL}/listaequipamentos`).then(response => {
                        
                        setListaTemp(response.data);
                        
                    });

                

               
        
    },[lista,valor])




    return(
        
            
            <div>
                <h1>Novo Empestimo</h1>
                <form onSubmit={handleSubmit(cadastra)}>
                    <label >{nomeCliente}</label>
                    <label >-------</label>

                    <label >{foneCliente}</label>
                    <label >-------</label>
                    <label >{cpfCliente}</label>

                    <label >Valor Emprestimo: </label>
                    <input type="number" value={valor} onChange={(e)=>setValor(e.target.value)}/>
                    <button type="submit">Enviar</button>
                    
                </form>

                <button onClick={pucharEquipamentos}>Listar Todos</button>

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
            </div>
        

    )
}

export default CadastraEmprestimo;


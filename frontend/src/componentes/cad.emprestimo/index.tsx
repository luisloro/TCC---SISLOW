
import CadCliente from "../cad.cliente";
import {Route,Routes,Link} from "react-router-dom";
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

    const cadastra = (dados: any)=> {
                const dinicio = datainicio.toISOString().slice(0,10);
                const dfim = datafim.toISOString().slice(0,10);
                console.log(dfim)
                axios.post(
                    `${BASE_URL}/cademprestimo?valor=80&idCliente=1&datainicio=${dinicio}&datafim=${dfim}`).then(response => {
                        console.log(response.data);
                        
                    });
    }

    const pucharEquipamentos=()=>axios.get(
        `${BASE_URL}/equipamento`).then(response => {
            setLista(response.data);
            setListaTemp([]);

});
    

    const adicionaLista = (idequip: number)=> axios.post(
        `${BASE_URL}/addequip?idEquipamento=${idequip}`).then(response => {
           

            axios.get(
                `${BASE_URL}/listatemp`).then(response => {
                    
                    setListaTemp(response.data);
                    
                });
                axios.post(
                    `${BASE_URL}/removeequip?id=${idequip}`).then(response => {
                        console.log(idequip);
                        setLista(response.data);

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
                `${BASE_URL}/equipamento2`).then(response => {
                  
                    setLista(response.data);
                    
                });

               
        
    },[listatemp])




    return(
        
            
            <div>
                <h1>Novo Empestimo</h1>
                <form onSubmit={handleSubmit(cadastra)}>
                    <label >{nomeCliente}</label>
                    <label >-------</label>

                    <label >{foneCliente}</label>
                    <label >-------</label>
                    <label >{cpfCliente}</label>
                    <button type="submit">Enviar</button>
                    
                </form>

                <button onClick={pucharEquipamentos}>Listar Todos</button>

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
                            lista.map(equipamento=>{
                                return(
                            <tr key={equipamento.id}>
                            <td>{equipamento.id}</td>
                            <td>{equipamento.modelo}</td>
                            <td><button onClick={()=>adicionaLista(equipamento.id)}>Add</button></td>
                            
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


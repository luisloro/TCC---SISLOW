
import CadCliente from "../cad.cliente";
import {Route,Routes,Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import {useForm} from  'react-hook-form';
import { Equipamento } from "../models/equipamentol";
import { Emprestimo } from "../models/emprestimo";


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

        axios.get(
            `${BASE_URL}/emprestimo/${id}`).then(response => {
                setEmprestimo(response.data);
                setDataInicio(response.data.datainicio);
                setDataFim(response.data.datafim);
                
            });

            

            axios.get(
                `${BASE_URL}/recuperaequips/${id}`).then(response => {
                    setListaEquipamento(response.data);
                });
    },[])




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
        

    )
}

export default ContratoEmprestimo;


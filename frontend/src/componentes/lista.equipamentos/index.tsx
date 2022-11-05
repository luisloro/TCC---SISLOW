import CadCliente from "../cad.cliente";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../request";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Equipamento } from "../models/equipamentol";

function ListaEquipamentos(){
    const [lista, setLista] = useState<Equipamento[]>([]);

    
    const excluiequipamento = (idequip: number) => axios.delete(
        `${BASE_URL}/excluiequip/${idequip}`).then(response => {
            
        });
        

    useEffect(() => {

        axios.get(
            `${BASE_URL}/todosequip`).then(response => {
                setLista(response.data);
    
    
            });


    }, [lista])

    return(
        <div>

        
        <table className="table table-striped table-hover">
        <tbody>
                    {
                        lista.map(equipamento => {
                            return (
                                <tr>
                                    <td>{equipamento.id}</td>
                                    <td>{equipamento.modelo}</td>
                                    <Link className="btn btn-outline-primary btn-sm ms-1" to={`/editequip/${equipamento.id}`}> Edita Equipamento </Link>
                                    <button className="btn btn-outline-primary btn-sm ms-1" onClick={() => excluiequipamento(equipamento.id)}>Exclui</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
    </table>
    </div>
    )

}

export default ListaEquipamentos;
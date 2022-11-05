import { Route, Routes, Link ,useNavigate } from "react-router-dom";
import CadProduto from ".";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from "../request";
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";
import { useParams } from "react-router-dom";

function EditaEquipamento() {

    const { register, handleSubmit } = useForm();
    const { id } = useParams();

    const navigate = useNavigate();
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [tipo, setTipo] = useState('');
    const [serial, setSerial] = useState('');


    const editaEquipamento = (dados: any) => axios.post(
        `${BASE_URL}/editequip?modelo=${modelo}&marca=${marca}&tipo=${tipo}&serial=${serial}&idEquipamento=${id}`).then(response => {
            console.log(response.data);
            setModelo('');
            setMarca('');
            setTipo('');
            setSerial('');
            navigate('/listaequip');
        });

        useEffect(() => {

            axios.get(
                `${BASE_URL}/equip/${id}`).then(response => {
                setModelo(response.data.modelo);
                setMarca(response.data.marca);
                setTipo(response.data.tipo);
                setSerial(response.data.serial);
        
        
                });
    
    
        }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(editaEquipamento)} >
                <div className="row">
                    <div className="col-md-4">
                        <label >Marca do Equipamento:</label>
                        <input className="form-control" type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label >Modelo do Equipamento:</label>
                        <input className="form-control" type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label >Tipo do Equipamento:</label>
                        <input className="form-control" type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label >Serial do Equipamento:</label>
                        <input className="form-control" type="text" value={serial} onChange={(e) => setSerial(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-success min-300 mt-3" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditaEquipamento;

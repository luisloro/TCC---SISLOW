import { Route, Routes, Link } from "react-router-dom";
import CadProduto from ".";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from "../request";
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";


function CadEquipamentoExibicao() {

    const { register, handleSubmit } = useForm();



    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [tipo, setTipo] = useState('');
    const [serial, setSerial] = useState('');


    const cadEquipamento = (dados: any) => axios.post(
        `${BASE_URL}/cadequipexib?modelo=${modelo}&marca=${marca}&tipo=${tipo}`).then(response => {
            console.log(response.data);
            setModelo('');
            setMarca('');
            setTipo('');
           
        });

    return (
        <div>
            <form onSubmit={handleSubmit(cadEquipamento)} >
                <div className="row">

                <div className="col-md-4">
                        <label >Modelo do Equipamento:</label>
                        <input className="form-control" type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label >Marca do Equipamento:</label>
                        <input className="form-control" type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label >Tipo do Equipamento:</label>
                        <input className="form-control" type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
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

export default CadEquipamentoExibicao;

import {Route,Routes,Link} from "react-router-dom";
import CadProduto from ".";
import {useForm} from  'react-hook-form';
import axios from 'axios';
import { BASE_URL } from "../request";
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";


function CadEquipamento(){

    const {register, handleSubmit} = useForm();



    const [modelo,setModelo] = useState('');
    const [marca,setMarca] = useState('');
    const [tipo,setTipo] = useState('');
    const [serial,setSerial] = useState('');


    const cadEquipamento = (dados: any)=> axios.post(
        `${BASE_URL}/cadequip?modelo=${modelo}&marca=${marca}&tipo=${tipo}&serial=${serial}`).then(response => {
            console.log(response.data);
            setModelo('');
            setMarca('');
            setTipo('');
            setSerial('');
        });
    return(
        
            
            <div>
                <form onSubmit={handleSubmit(cadEquipamento)} >
                    <label >Marca do Equipamento</label>
                    <input type="text" value={marca} onChange={(e)=>setMarca(e.target.value)}/>

                    <label >Modelo do Equipamento</label>
                    <input type="text" value={modelo} onChange={(e)=>setModelo(e.target.value)}/>

                    <label >Tipo do Equipamento</label>
                    <input type="text" value={tipo} onChange={(e)=>setTipo(e.target.value)} />

                    <label >Serial do Equipamento</label>
                    <input type="text" value={serial} onChange={(e)=>setSerial(e.target.value)} />

                    

                    <button type="submit">Enviar</button>
                </form>


                        
        
            </div>

            
        

    )
}

export default CadEquipamento;


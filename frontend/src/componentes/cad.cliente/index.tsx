import {Route,Routes} from "react-router-dom";
import CadProduto from "../cad.produto";
import {useForm} from  'react-hook-form';
import axios from 'axios';
import { BASE_URL } from "../request";
import { useEffect, useState } from "react";
import { Cliente } from "../models/cliente";

function CadCliente(){

    const {register, handleSubmit} = useForm()

    const nome = "luis";
    const email = "outlook";
    const cpf = 123;

    const [lista,setLista] = useState<Cliente[]>([]);

    const cadCliente = (dados: any)=> axios.get(
        `${BASE_URL}/cliente`).then(response => {
            console.log(response.data);
            setLista(response.data);
        });
    return(
        
            
            <div>
                <form onSubmit={handleSubmit(cadCliente)} >
                    <label >Nome do Cliente</label>
                    <input type="text" {...register("nome")}/>

                    <label >Email</label>
                    <input type="text" {...register("email")}/>

                    <label >CPF</label>
                    <input type="text" {...register("cpf")} />

                    <button type="submit">Enviar</button>
                </form>

                <table>
                    <thead>
                    <tr>
                            <th>Teste</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lista.map(cliente=>{
                                return(
                            <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>teste</td>
                            <td></td>
                        </tr>
                                )
                            })
                        }
                    
                    
                    </tbody>
                        
                </table>
            </div>

            
        

    )
}

export default CadCliente;


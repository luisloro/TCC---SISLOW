import {Route,Routes,Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import TelaLogin from "../login";
import { BASE_URL } from "../request";
import axios from 'axios';
import { Equipamento } from "../models/equipamentol";


function TelaInicial(){

    const auth = useContext(AuthContext);

    const [lista,setLista] = useState<Equipamento[]>([]);


    useEffect(()=>{

            axios.get(
                `${BASE_URL}/equipexib`).then(response => {
                  
                    setLista(response.data);
                    
                });

               
        
    },[])
    return(
        <div>
            <h1>Tela Inicial</h1>
            {!auth.user && <Link to={"/consultaempcli"}> Consulte seus emprestimos em aberto</Link>}
            <div>
            <table>
                    <thead>
                    <tr>
                            <th>Equipamentos para Emprestimo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lista.map(equipamento=>{
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
        </div>
    )
}

export default TelaInicial;
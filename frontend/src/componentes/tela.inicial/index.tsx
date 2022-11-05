import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Equipamento } from "../models/equipamentol";
import axios from "axios";
import { BASE_URL } from "../request";

function TelaInicial(){
    const auth = useContext(AuthContext);

    const [equipamentos, setEquipamentos] = useState<[]>([]);
    const [lista,setLista] = useState<Equipamento[]>([]);
    useEffect(()=>{

        axios.get(
            `${BASE_URL}/equipexib`).then(response => {
              
                setLista(response.data);
                
            });

           
    
},[])

    return(
        <div>
            <h3>Olá, {auth.user && auth.user.name}</h3>
            <div><br/></div>
            {
                auth.user && auth.user.type == "ADMIN" ? <div></div>: null
            }

            {
                auth.user && auth.user.type == "CLIENTE" ? <div className="row">
                <div className="col-md-4">
                    <h4>Equipamentos:</h4>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Equipamento</th>
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
            </div>: null
            }
        </div>
    )
}

export default TelaInicial;
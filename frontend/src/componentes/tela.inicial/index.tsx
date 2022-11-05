<<<<<<< HEAD
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
=======
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
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
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
<<<<<<< HEAD
                        </tbody>
                    </table>
                </div>
            </div>: null
            }
=======
                    
                    
                    </tbody>
                        
                </table>
            </div>
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
        </div>
    )
}

export default TelaInicial;
import './styles.css';
import {Route,Routes,Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
function Menu(){
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () =>{
        await auth.signout();
         navigate('/');
    }
    return(
        
            <div className="card">
            <table>
                <thead className="tabela-menu">
                    <tr>
                        <th><Link to={"/cadcli"}> Cadastro de Clientes </Link></th>
                        <th><Link to={"/listacli"}>Lista de Clientes</Link></th>
                        <th><Link to={"/cadequip"}>Cadastro Equipamento</Link></th>
                        <th><Link to={"/listaemp"}>Lista de Emprestimos</Link></th>
                        <th><Link to={"/listaempabertos"}>Lista de Emprestimos Abertos</Link></th>
                        <th><Link to={"/emprestimosatrasados"}>Lista de Emprestimos Atrasados</Link></th>
                        <th ><button onClick={handleLogout}> Sair </button></th>
                        
                    </tr>
                </thead>
            </table>
            </div>
        

    )
}

export default Menu;


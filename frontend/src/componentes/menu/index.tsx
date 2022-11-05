import {Route,Routes,Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { IoMdLogOut } from 'react-icons/io';

function Menu(){
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () =>{
        await auth.signout();
        navigate('/');
    }
    return(
        <div className="btn-group mb-5">
            {auth.user && auth.user.type=="CLIENTE" && <Link className="btn btn-secondary" to={"/inicial"}>Home</Link>}
            {auth.user && auth.user.type=="ADMIN" && <Link className="btn btn-secondary" to={"/cadcli"}> Cadastro Pessoa Física</Link>}
            {auth.user && auth.user.type=="ADMIN" && <Link className="btn btn-secondary" to={"/cadclijuridico"}> Cadastro Pessoa Jurídica</Link>}
            {auth.user && auth.user.type=="ADMIN" && <Link className="btn btn-secondary" to={"/listacli"}>Lista de Clientes</Link>}
            {auth.user && auth.user.type=="ADMIN" && <Link className="btn btn-secondary" to={"/listaemp"}>Lista de Empréstimos</Link>}
            {auth.user && auth.user.type=="ADMIN" && <Link className="btn btn-secondary" to={"/listaequip"}>Lista de Equipamentos</Link>}
            {auth.user && auth.user.type=="ADMIN" && <Link className="btn btn-secondary" to={"/listaequipexib"}>Lista de Equipamentos de Exibicao</Link>}
            {auth.user && auth.user.type=="ADMIN" && <Link className="btn btn-secondary" to={"/cadequip"}>Cadastro de Equipamentos</Link>}
            {auth.user && auth.user.type=="ADMIN" && <Link className="btn btn-secondary" to={"/cadequipexibicao"}>Cadastro de Equipamentos Para Exibicao</Link>}
            <Link className="btn btn-secondary" to={"/listaempabertos"}>Lista de Empréstimos Abertos</Link>
            <Link className="btn btn-secondary" to={"/emprestimosatrasados"}>Lista de Empréstimos Atrasados</Link>
            <button className="btn btn-danger text-white" onClick={handleLogout}> 
                Sair <IoMdLogOut className="m-l-2 text-white" />
            </button>
        </div>
    )
}

export default Menu;


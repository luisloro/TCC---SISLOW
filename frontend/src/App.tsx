import Cabecalho from "./componentes/cabecalho";
import CadCliente from "./componentes/cad.cliente";
import Menu from "./componentes/menu";
import {Route,Routes,Link} from "react-router-dom";
import CadProduto from "./componentes/cad.equipamento";
import Rota from "./componentes/Rotas";
import {useForm} from  'react-hook-form';
import TelaLogin from "./componentes/login";
import { AuthContext } from "./componentes/contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {

    const auth = useContext(AuthContext);

    return (
    <div className="container">
        {!auth.user && <TelaLogin/>}

        {auth.user && 
        <div>
            <Cabecalho />
            <section id="menu">
                <div className="barra-menu">
                    <Menu/>
                </div>
            </section>
            <main>
                <Rota/>
            </main>
        </div>
        }
    </div>
    )
}

export default App

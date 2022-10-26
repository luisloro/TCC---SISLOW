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
function App() {

  const auth = useContext(AuthContext);
  
  return (
    <>
    {!auth.user && <TelaLogin/>}
      <Cabecalho />
      <section id="menu">
          <div className="barra-menu">
          {auth.user && <Menu/>}
          </div>
        </section>
      <main>
        <Rota/>
      </main>
    </>
  )
}

export default App

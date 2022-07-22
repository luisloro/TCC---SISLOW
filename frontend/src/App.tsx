import Cabecalho from "./componentes/cabecalho";
import CadCliente from "./componentes/cad.cliente";
import Menu from "./componentes/menu";
import {Route,Routes,Link} from "react-router-dom";
import CadProduto from "./componentes/cad.produto";
import Rota from "./componentes/Rotas";
import {useForm} from  'react-hook-form';

function App() {
  return (
    <>
      <Cabecalho />
      <section id="menu">
          <div className="barra-menu">
            <Menu/>
          </div>
        </section>
      <main>
        <Rota/>
        
      </main>
    </>
  )
}

export default App

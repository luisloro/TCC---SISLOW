
import {Route,Routes,Link} from "react-router-dom";
import CadCliente from "../cad.cliente";
import CadProduto from "../cad.produto";

function Rota(){
    return(
        <Routes>
          <Route path="/cadcli" element={<CadCliente/>}></Route>
          <Route path="/cadprod" element={<CadProduto/>}></Route>
        </Routes>
    )
}

export default Rota;

        
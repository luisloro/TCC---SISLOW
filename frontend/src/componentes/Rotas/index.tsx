
import {Route,Routes,Link} from "react-router-dom";
import CadCliente from "../cad.cliente";
import CadastraEmprestimo from "../cad.emprestimo";
import CadProduto from "../cad.produto";
import EditCliente from "../edita.cliente";
import ListaCliente from "../lista.cliente";

function Rota(){
    return(
        <Routes>
          <Route path="/cadcli" element={<CadCliente/>}></Route>
          <Route path="/cadprod" element={<CadProduto/>}></Route>
          <Route path="/editcli/:id" element={<EditCliente/>}></Route>
          <Route path="/listacli" element={<ListaCliente/>}></Route>
          <Route path="/cademp/:id" element={<CadastraEmprestimo/>}></Route>
        </Routes>
    )
}

export default Rota;

        
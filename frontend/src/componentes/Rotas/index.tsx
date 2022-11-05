
import {BrowserRouter as Router,Route,Routes,Link,Navigate} from "react-router-dom";
import CadCliente from "../cad.cliente";
import CadastraEmprestimo from "../cad.emprestimo";
import CadEquipamento from "../cad.equipamento";
import DetalheEmprestimo from "../detalhe.emprestimo";
import EditCliente from "../edita.cliente";
import ListaCliente from "../lista.cliente";
import ListaEmprestimoAbertos from "../lista.emprestimo";
import ListaEmprestimos from "../lista.todos.emprestimos";
import TelaLogin from "../login";
import { useContext, useEffect, useState } from "react";
import { RequireAuth } from "../contexts/RequireAuth";
import { AuthContext } from "../contexts/AuthContext";
import TelaInicial from "../tela.inicial";
import ListaEmprestimosAtrasados from "../lista.emprestimos.atrasados";
import ListaEmprestimosCliente from "../lista.emprestimos.cliente";
import ConsultaEmprestimos from "../consulta.emprestimos.cliente";
import ConsultaEmprestimosCliente from "../consulta.emprestimos.cliente";
import ContratoEmprestimo from "../contrato.emprestimo";

function Rota(){

  const auth = useContext(AuthContext);

    return(
      
        <Routes>
          <Route path="/" element={<TelaInicial/>}></Route>
          <Route path="/inicial" element={<TelaInicial/>}></Route>
          <Route path="/cadcli" element={<RequireAuth><CadCliente/></RequireAuth>}></Route>
          <Route path="/editcli/:id" element={<RequireAuth><EditCliente/></RequireAuth>}></Route>
          <Route path="/listacli" element={<RequireAuth><ListaCliente/></RequireAuth>}></Route>
          <Route path="/cademp/:id" element={<RequireAuth><CadastraEmprestimo/></RequireAuth>}></Route>
          <Route path="/listaempabertos" element={<RequireAuth><ListaEmprestimoAbertos/></RequireAuth>}></Route>
          <Route path="/detalhesemp/:id" element={<DetalheEmprestimo/>}></Route>
          <Route path="/listaemp" element={<RequireAuth><ListaEmprestimos/></RequireAuth>}></Route>
          <Route path="/cadequip" element={<RequireAuth><CadEquipamento/></RequireAuth>}></Route>
          <Route path="/emprestimosatrasados" element={<RequireAuth><ListaEmprestimosAtrasados/></RequireAuth>}></Route>
          <Route path="/empcli/:id" element={<RequireAuth><ListaEmprestimosCliente/></RequireAuth>}></Route>
          <Route path="/login" element={<TelaLogin/>}></Route>
          <Route path="/consultaempcli" element={<ConsultaEmprestimosCliente/>}></Route>
          <Route path="/contratoemp/:id" element={<RequireAuth><ContratoEmprestimo/></RequireAuth>}></Route>
          
          
        </Routes>
        
    )
}

export default Rota;

        
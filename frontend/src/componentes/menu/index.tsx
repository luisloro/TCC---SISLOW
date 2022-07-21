import './styles.css';
import {Route,Routes,Link} from "react-router-dom";
function Menu(){
    return(
        
            <div className="card">
            <table>
                <thead className="tabela-menu">
                    <tr>
                        <th><Link to={"/cadcli"}> Cadastro de Clientes </Link></th>
                        <th><Link to={"/cadprod"}>Cadastro Produto</Link></th>
                        <th><a href="">Emprestimo</a></th>
                    </tr>
                </thead>
            </table>
            </div>
        

    )
}

export default Menu;


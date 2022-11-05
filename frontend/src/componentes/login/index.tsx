import { useEffect, useState,useContext } from "react";
import {useForm} from  'react-hook-form';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { IoMdLogIn } from 'react-icons/io';

const TelaLogin = () =>{

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
   
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async () => {
        if (name && password) {
            const isLogged = await auth.signin(name, password);
            console.log(isLogged);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Usuário ou senha incorretos.");
                navigate('/login');
            }
        }
    }

    
    return(
        <div>
            <header>
                <div className='topo'>
                    <h1>SISLOW</h1>
                    <h2>SISTEMA WEB PARA AUXÍLIO NA LOCAÇÃO DE EQUIPAMENTOS</h2>
                </div>
            </header>
            <br/><br/><br/>
            <div className="container login-box">
                <form onSubmit ={ev =>{ev.preventDefault()}}>
                    <label className="form-label">Usuario</label>
                    <input className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

                    <label className="form-label">Senha</label>
                    <input className="form-control" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <button className="btn btn-dark mt-3" type="submit" onClick={handleLogin}> 
                        Entrar <IoMdLogIn className="m-l-2"/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TelaLogin;
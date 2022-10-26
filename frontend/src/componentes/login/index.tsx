import { useEffect, useState,useContext } from "react";
import {useForm} from  'react-hook-form';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";



const TelaLogin = () =>{

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
   
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async () => {
        if (name && password) {
            const isLogged = await auth.signin(name, password);
            if (isLogged) {
                navigate('/');
            } else {
                navigate('/login');
                alert("Não deu certo.");
            }
        }
    }

    
    return(
        
        <div>
            
        <form className="form" >
        <label >Usuario</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

        <label >Senha</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button type="submit" onClick={handleLogin}> Entrar</button>

        </form>
        </div>
    )
}

export default TelaLogin;
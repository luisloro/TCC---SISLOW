import { useEffect, useState,useContext } from "react";
import {useForm} from  'react-hook-form';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
<<<<<<< HEAD


=======
<<<<<<< HEAD
import { IoMdLogIn } from 'react-icons/io';
=======


>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170

const TelaLogin = () =>{

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
   
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async () => {
        if (name && password) {
            const isLogged = await auth.signin(name, password);
<<<<<<< HEAD
=======
<<<<<<< HEAD
            console.log(isLogged);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Usuário ou senha incorretos.");
                navigate('/login');
=======
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
            if (isLogged) {
                navigate('/');
            } else {
                navigate('/login');
                alert("Não deu certo.");
<<<<<<< HEAD
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
            }
        }
    }

    
    return(
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
        
        <div>
            
        <form className="form" >
        <label >Usuario</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

        <label >Senha</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button type="submit" onClick={handleLogin}> Entrar</button>

        </form>
<<<<<<< HEAD
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
        </div>
    )
}

export default TelaLogin;
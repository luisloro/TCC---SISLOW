import {createContext,useEffect,useState} from "react";
import { useApi } from "../hooks/useApi";
import { User } from "../models/user";
import { AuthContext } from "./AuthContext";


export const AuthProvider=( {children}:{children:JSX.Element})=>{
    const [user,setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(()=>{
        
        const userlogado = localStorage.getItem('user');   
        if(userlogado){
            setUser(JSON.parse(userlogado))
        }

    
},[])
 
    const signin =async (name:string,password:string)=>{
        const data = await api.signin(name,password);
        console.log(data)
        if(data){
            setUser(data);
            localStorage.setItem('user',JSON.stringify(data));

            return true;
        }
        return false;
    };

    const signout=async ()=>{
        localStorage.removeItem('user');
        await api.logout();
        setUser(null);
    }

    return(
    <AuthContext.Provider value={{user,signin,signout}}>
        {children}
    </AuthContext.Provider>
    );
}
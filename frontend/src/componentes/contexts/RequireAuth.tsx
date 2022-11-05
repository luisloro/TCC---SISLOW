import { useContext } from "react";
import TelaLogin from "../login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({children}:{children:JSX.Element})=>{

    const auth = useContext(AuthContext);

    if(!auth.user){
        return <TelaLogin/>
    }

    return children;
}
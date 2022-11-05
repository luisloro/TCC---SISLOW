import {createContext} from "react";
import { User } from "../models/user";

export type AuthContextType={
    user:User | null;
    signin:(name:string,password:string)=> Promise<boolean>;
    signout:()=>void;
}

export const AuthContext = createContext<AuthContextType>(null!);
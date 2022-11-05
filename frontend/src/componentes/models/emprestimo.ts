import { Cliente } from "./cliente";

export type Emprestimo = { 
    id: number;
    valor: number;
    datainicio:Date;
    datafim:Date;
    emprestado:Boolean;
    cliente:Cliente;
}
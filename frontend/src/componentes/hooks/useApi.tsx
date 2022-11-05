import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:8080"
});

export const useApi=()=>({
    validateToken:async(token:string)=>{
        const response = await api.post('/validate',{token});
        return response.data;
    },
    signin:async(name:string,password:string)=>{
        
        const response = await api.post(`/usuario?name=${name}&password=${password}`);
        console.log(response.data)

        return response.data;
    },

    logout:async()=>{
        return{status:true};
    }

})
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        const response = await api.post(`/login?username=${name}&password=${password}`);
        console.log(response.data)
=======
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
        
        const response = await api.post(`/usuario?name=${name}&password=${password}`);
        console.log(response.data)

<<<<<<< HEAD
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
        return response.data;
    },

    logout:async()=>{
        return{status:true};
    }

})
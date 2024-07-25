import axios from 'axios';


export const RegisterApi=(inputs)=>{
    let data={id:inputs.id,displayName:inputs.name , email:inputs.email , password:inputs.password}
    return axios.post('http://localhost:3004/data' , data)

}
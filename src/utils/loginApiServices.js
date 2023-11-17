import axios from "axios"


 const LoginApiServices= axios.create({
    baseURL: "https://giddy-uniform-moth.cyclic.app/api"
})


export default LoginApiServices

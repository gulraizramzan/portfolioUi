import axios from "axios"


 const LoginApiServices= axios.create({
    baseURL: "http://localhost:4000/api"
})


export default LoginApiServices
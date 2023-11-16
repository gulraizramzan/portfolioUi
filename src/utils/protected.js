import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Protected=({Component})=>{
    const navigate=useNavigate()
   
    useEffect(()=>{
        let token=localStorage.getItem("token")
        let role=localStorage.getItem("role")
        if(token && role==="true"){ 
            navigate('/admin-dashbord')
        }else if(token){
            navigate('/')
        }
        else
        {
            navigate('/login')
        }
    },[])
return(
    <>
    <Component/>
    </>
)
}
export default Protected
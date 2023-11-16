import React,{useState,useEffect} from 'react'
import Nav from './Nav'
import LoginApiServices from '../../utils/loginApiServices'
import { useNavigate,Link } from 'react-router-dom'
const AllUSer = () => {
    const [userData,setUserData]=useState([])
    // console.log(userData)
    const navigate=useNavigate()
        const getUserData=async()=>{
            try {
                
                const res=await LoginApiServices.get('/users')
                setUserData(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
    
        useEffect(()=>{
            getUserData()
        },[])

        const handelView=async(id)=>{
            navigate(`/updateuser/${id}`)
        }
const handleDelete=async(id)=>{

try {
    const res=LoginApiServices.delete(`/users/${id}`)
    alert("user deleted")
} catch (error) {
    console.log(error)
}
}

  return (
    <div className="ml-64 px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500 bg-grey">
    <Nav/>   

 <div className='mt-5'>      
     <div className="flex flex-col  min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
                        <h6>User</h6>
                    </div>
                    <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                <thead className="align-bottom">
                    <tr>
                        <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">First Name</th>
                        {/* <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Last Name</th> */}
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">User Name</th>
    
                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">E-mail</th>
                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">Phone Number</th>
                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">Address</th>
                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">Role</th>
                     </tr>
                    </thead>
                                {userData.map((user)=>(
    <>
                                    <tbody>
                                    <tr>
                                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                            <div className="flex px-2 py-1">
                                                
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-0 leading-normal text-sm">{user.firstName}</h6>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400">{user.lastName}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                            <span className="font-semibold leading-tight text-xs text-slate-400">{user.userName}</span>
                                        </td>
                                        <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                            <span className="px-2 text-xxs rounded py-1 inline-block whitespace-nowrap text-center align-baseline font-bold  leading-none">{user.email}</span>
                                        </td>
                                      
                                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                            <span className="font-semibold leading-tight text-xs text-slate-400">{user.phone}</span>
                                        </td>
                                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                            <span className="font-semibold leading-tight text-xs text-slate-400">{user.address}</span>
                                        </td>
                                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                            <span className="font-semibold leading-tight text-xs text-slate-400">{user.isAdmin}</span>
                                        </td>
                                        <td class="flex items-center px-6 py-4">
                                          <button onClick={() => handelView(user._id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</button>
                                        <Link to="/alluser" onClick={() => handleDelete(user._id)} class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</Link>
                                         </td>
                                        
                                    </tr>
                                 
                                </tbody>
    </>
    
    ))}
                            </table>
                        </div>
                    </div>
        </div> 
        </div> 
    </div>
  )
}

export default AllUSer
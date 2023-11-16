import React from 'react'
import Nav from './Nav'
import { useState,useEffect } from 'react'
import ProductServices from '../../utils/productServices'
import { useNavigate,Link } from 'react-router-dom'
const Inbox = () => {
    const[message,setMessage]=useState([])
    useEffect(()=>{
        getAllMessage()
    },[])
    const getAllMessage=async()=>{
        try {
            const res= ProductServices.get("/all-message")
            console.log(res)
            setMessage((await res).data.data)
        } catch (error) {
            console.log(error)
        }
    }
 

    const handleDelete = async (id) => {
      try {
        const del=ProductServices.delete(`/dell-message/${id}`)
      } catch (error) {
        console.log(error)
      }
      };
    
      const navigate=useNavigate()
    
      const handelView = async (productId) => {
        
      };
  return (
    <>
    <Nav/>
    <div class="mt-10 ml-80">
    <table class="w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                   Name
                </th>
                <th scope="col" class="px-6 py-3">
                   E-mail
                </th>
                <th scope="col" class="px-6 py-3">
                    Message
                </th>


                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {message.map((mess)=>(
             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <td class="w-4 p-4">
                 <div class="flex items-center">
                     <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                     <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                 </div>
             </td>
           
           
             <td class="px-6 py-4">
             {mess.name}
             </td>
             <td class="px-6 py-4">
                 {mess.email}
             </td>
           
             <td class="px-6 py-4">
                {mess.message}
             </td>
           

             <td class="flex items-center px-6 py-4">
                 <button onClick={() => handelView(mess._id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</button>
                 <Link to="/inbox" onClick={() => handleDelete(mess._id)} class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</Link>
             </td>
         </tr>
           ))}

        </tbody>
    </table>
</div>
    </>
  )
}

export default Inbox
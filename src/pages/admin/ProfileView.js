import React,{useState,useEffect} from 'react'
import Nav from './Nav'
import LoginApiServices from '../../utils/loginApiServices'
import ProductServices from '../../utils/productServices'
import { useParams } from 'react-router-dom'
const ProfileView = () => {
    const [userData,setUserData]=useState([])
    // console.log(userData)
    // const{id}=useParams()
    const {firstName,lastName,userName,email,phoneNumber,address,isAdmin,password,_id}=userData
    console.log("id",_id)
        const getUserData=async()=>{
            try {
                const userId=localStorage.getItem("user")
                const res=await LoginApiServices.get(`/user/${userId}`)
                setUserData(res.data.data)
                // console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        const handelChanges=(event)=>{
            const {name, value}=event.target;
            setUserData({
              ...userData, [name]: value
            })
          
          };
        useEffect(()=>{
            getUserData()
        },[])


        const handelUpdateUser=async(id)=>{
            try {
                const res= ProductServices.put(`/users/${id}`,userData)
            } catch (error) {
                console.log(error)
            }
        }

  return (
   <>
   <Nav/>
   <div className='md:mx-auto bg-slate-900 h-96 text-center mt-20 m-auto max-w-screen-lg'>
      <div className='bg-light-blue-700 text-white rounded-md  h-10 w-4/5  ml-16 drop-shadow-2xl'>
        <p className='text-center'>My Account</p>
      </div>

      <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2 mt-10">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input value={firstName} 
            onChange={handelChanges}
            type="text"
            name='firstName'
            id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input 
             onChange={handelChanges}
             name='lastName'
            value={lastName} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
            <input 
             onChange={handelChanges}
             name='userName'
            value={userName} type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input
             onChange={handelChanges}
             name='phoneNumber'
            value={phoneNumber} type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" 
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
            required/>
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
            <input 
             onChange={handelChanges}
             name='address'
            value={address} type="text" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role(only true or false)</label>
            <input
             onChange={handelChanges}
             name='isAdmin'
            value={isAdmin} type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
    </div>
    <div class="mb-6">
        <label
        for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input
        onChange={handelChanges}
        name='email'
        value={email} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div className="flex justify-end mt-6">
            <button
            onClick={()=>handelUpdateUser(_id)}
            className="px-6 py-2 leading-5 text.black transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Update Data</button>
        </div>

</form>

        </div>
   </>
  )
}

export default ProfileView
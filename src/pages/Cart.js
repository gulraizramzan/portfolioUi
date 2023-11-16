import React, { useEffect, useState } from 'react'
import CartService from '../utils/cartServices'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProductServices from '../utils/productServices'
const Cart = () => {

    const[cartData,setCartData]=useState([])
    console.log("cartdata",cartData.items)
      const[otherData,setOtherData]=useState([])

    const sum=()=>{
      let totalamout=0
      if(cartData==='')
      {
       console.log("your cart is empty")
      }else{

        for(const item of cartData){
          totalamout +=item.quantity*item.price
        }
      
      }
      return totalamout
      }
     
const totalamout=sum(cartData)
console.log(totalamout)
      

useEffect(()=>{
  getCart()
},[])

      const navigate=useNavigate()
      const userId=localStorage.getItem("user")
      console.log(userId)
    const getCart=async()=>{
      try {
        
          const res= await CartService.get(`/get-cart/${userId.toString()}`)
          console.log(res)
          setCartData(res.data.data.items)
          setOtherData(res.data)
      } catch (error) {
          console.log(error)
      }
  }

  
  
      const handelOrder=()=>{
       navigate('/make-order')
      }



  return (
    <>
      <Header/>
      {cartData.length===0?
      
      <><div className='py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto item-center'>
         <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">You’r Cart is empty</p>
        
        </div></>:
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
<div className="flex justify-start item-start space-y-2 flex-col">
  <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Cart</h1>

</div>
<div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
  <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
    <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Cart’s Items</p>
 {cartData.map((CartData)=>(
   
  <>
       <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
      <div className="pb-4 md:pb-8 w-full md:w-40">
        <img className="w-20 hidden md:block" src={CartData.productId.image} alt="dress" />
        <img className="w-full md:hidden" src={CartData.productId.image} alt="dress" />
      </div>
      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-12">
          <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{CartData.productId.productTitle.slice(0,15)}</h3>

        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base dark:text-white xl:text-lg leading-6">${CartData.productId.price}<span className="text-red-300 line-through"></span></p>
          <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{CartData.quantity}</p>
          <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">${CartData.productId.price*CartData.quantity}</p>
        </div>
      </div>
    </div>
  </>
 ))}
  
    </div>
  </div>

        <div className="flex md:flex-row flex-col  w-full xl:w-96 space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
      <div className="flex flex-col px-4 py-6 md:p-6 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
          <div className="flex justify-between w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${totalamout}</p>
          </div>

          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
          <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${totalamout===""?'0':totalamout+8}</p>
        </div>
        <div className="flex w-full justify-center items-center md:justify-start md:items-start">
          <button 
          onClick={handelOrder} 
          className="mt-auto md:mt-20 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Proceed to order</button>
        </div>
      </div>

    </div>
    
</div>

</div>}

      </>
   
  )
}

export default Cart
import React, { useState } from 'react'
import Nav from './Nav'
import { useSelector } from "react-redux";
import ProductServices from '../../utils/productServices'
import { useEffect } from 'react';
const AdminDashbord = () => {
   const { user } = useSelector((state) => state.user);
   const[order,setOrder]=useState([])
   const productTitle = order.items;
   console.log("pooooooo",productTitle)
   console.log("productttttttttt",order)
//    console.log("oder items",order.length)
//    console.log("user",user)
const totalOrder=order.length
   const allOrder=async()=>{
    try {
        let limit
        const res= await ProductServices.get(`/get-all-order?${limit=3}`)
        
        setOrder(res.data)
        console.log(res)
    } catch (error) {
        
    }
   }
   
useEffect(()=>{
allOrder()
},[])


  return (
  <>

<div className="ml-64 px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500 bg-grey">
<Nav/>   
<div className="flex flex-wrap -mx-3 removable mt-16">
                <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">Today's Money</p>
                                        <h5 className="mb-0 font-bold"> $53,000 <span className="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
                                        </h5>
                                    </div>
                                </div>
                                {/* <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                        <i className="ni ni-money-coins text-lg leading-none relative top-3.5 text-white"></i>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">Today's Order</p>
                                        <h5 className="mb-0 font-bold"> {totalOrder} <span className="leading-normal text-sm font-weight-bolder text-lime-500">+3%</span>
                                        </h5>
                                    </div>
                                </div>
                                {/* <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                        <i className="ni ni-world text-lg leading-none relative top-3.5 text-white"></i>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">Active User</p>
                                        <h5 className="mb-0 font-bold"> +3,462 <span className="leading-normal text-red-600 text-sm font-weight-bolder">-2%</span>
                                        </h5>
                                    </div>
                                </div>
                                {/* <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                        <i className="ni ni-paper-diploma leading-none text-lg relative top-3.5 text-white"></i>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">Sales</p>
                                        <h5 className="mb-0 font-bold"> $103,430 <span className="leading-normal text-sm font-weight-bolder text-lime-500">+5%</span>
                                        </h5>
                                    </div>
                                </div>
                                {/* <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                        <i className="ni ni-cart leading-none text-lg relative top-3.5 text-white"></i>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-40'>      
 <div className="flex flex-col  min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
                    <h6>Order</h6>
                </div>
                <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                            <thead className="align-bottom">
                                <tr>
                                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Customer</th>
                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Order #</th>
                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>

                                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">Shipping Address</th>
                                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">Billing Address</th>
                                </tr>
                            </thead>
                            {order.map((orderData)=>(
                                <>
                                
                                <tbody>
                                <tr>
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <div className="flex px-2 py-1">
                                            
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-0 leading-normal text-sm">{orderData.userId.firstName}</h6>
                                                <p className="mb-0 leading-tight text-xs text-slate-400">{orderData.userId.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <span className="font-semibold leading-tight text-xs text-slate-400">{orderData._id}</span>
                                    </td>
                                    <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xxs rounded py-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">{orderData.status}</span>
                                    </td>
                                  
                                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <span className="font-semibold leading-tight text-xs text-slate-400">{orderData.shippingAddress}</span>
                                    </td>
                                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <span className="font-semibold leading-tight text-xs text-slate-400">{orderData.billingAddress}</span>
                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <a  className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
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


  </>
  )
}

export default AdminDashbord
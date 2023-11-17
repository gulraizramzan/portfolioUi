import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderSecond from '../components/Header'
import ProductServices from '../utils/productServices';
const Order = () => {
  const navigate=useNavigate()
    const [formData, setFormData] = useState({
        shippingAddress: '',
        billingAddress: ''
    });
    const [showPopup, setShowPopup] = useState(false);
  
    
    const handelChanges=(event)=>{
         event.preventDefault();
        const {name, value}=event.target;
       
        setFormData({
            ...formData,
            [name]: value
        });
    };

const handelOrder=async()=>{

    try {
      if(formData.billingAddress==="" && formData.shippingAddress==="")
      {
        alert("please file the requier field")
      }else
      {
        console.log(formData)
        const userId=localStorage.getItem("user")
        await ProductServices.post('/order/',{userId,shippingAddress:formData.shippingAddress,billingAddress:formData.billingAddress})
        setShowPopup(true)
      //   if(res)
      // alert("order placed",res)
      // navigate('/')
      }

    } catch (error) {
        console.log(error)
    }

}

const handelHome=()=>{
  setShowPopup(false)
  navigate('/')
}

  return (

  <>
  <HeaderSecond/>
  {showPopup ===true? (

<div className="flex min-h-screen items-center justify-center bg-gray-100">
  <div className="rounded-lg bg-gray-50 px-16 py-14">
    <div className="flex justify-center">
      <div className="rounded-full bg-green-200 p-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      </div>
    </div>
    <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">Congratuation!!!</h3>
    <p className="w-[230px] text-center font-normal text-gray-600">Your order have been taken and is being attended to</p>
    <button onClick={handelHome} className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">Go to Home</button>
  </div>
</div>
):  <div className="bg-gray-50 dark:bg-gray-800 w-full flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col mt-20">
<h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Address</h3>
<div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
  <div className="flex flex-col justify-start items-start flex-shrink-0">
  </div>
  <div className="flex justify-between xl:h-full items-stretch  flex-col mt-6 md:mt-0">
    <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row">
      <div className="flex justify-center  items-center md:items-start flex-col space-y-4 xl:mt-8">
        <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
        <input 
          name="shippingAddress" 
          value={formData.shippingAddress}
          onChange={handelChanges}
          required
          id="shippingAddress" type="text"  className="text-block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
       
      </div>
      <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
        <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
        <input 
          name="billingAddress" 
          value={formData.billingAddress}
          onChange={handelChanges}
          required
          id="billingAddress" type="text"  className="block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
      </div>
    </div>
              <div className="flex w-full justify-center items-center md:justify-start md:items-start">
              <button onClick={handelOrder} className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">Place Order</button>
    </div>
  </div>
</div>
</div>}
 

  </>
  )
}

export default Order
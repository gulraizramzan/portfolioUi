import React,{useState,useEffect} from 'react'
import ProductServices from '../../utils/productServices'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setProduct } from '../../redux/productSlice';
const ProductView = () => {
    const[product,setProductData]=useState([])

    const dispatch=useDispatch()

useEffect(()=>{
getAllProducts()
},[])

const getAllProducts=async()=>{
  let response= await ProductServices.get("/product");
  setProductData(response.data)

}

const handleDelete = async (productId) => {
    try {
      const response = await ProductServices.delete(
        `/product/${productId}`
      );
      if (response.data) {
        getAllProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate=useNavigate()

  const handelView = async (productId) => {
    try {
      const response = await ProductServices.get(
        `get-single-product/${productId}`
      );
     
      if (response.data.success) {
        dispatch(setProduct(response.data.data));
        navigate(`/productUpdate/${productId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };


//   const handelView=(productId)=>{
//     navigate(`/productUpdate/${productId}`)
//   }

  return (
    <>
    <Nav/>
<div className="mt-10 ml-80">
    <table className="w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
           
                <th scope="col" className="px-6 py-3">
                    Available
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>

                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {product.map((pro)=>(
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <td className="w-4 p-4">
                 <div className="flex items-center">
                     <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                     <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                 </div>
             </td>
             <td className="px-6 py-4">
             <img classNameName="h-10 object-cover rounded-t-xl self-center" src={pro.image} alt="" />
             </td>
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {pro.productTitle.slice(0,10)}
             </th>
             <td className="px-6 py-4">
             {pro.brand===""?"Generic":pro.brand}
             </td>
             <td className="px-6 py-4">
                 {pro.category}
             </td>
           
             <td className="px-6 py-4">
                 Yes
             </td>
             <td className="px-6 py-4">
              {"$"+pro.price}
             </td>

             <td className="flex items-center px-6 py-4">
                 <button onClick={() => handelView(pro._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</button>
                 <Link to="/view-product" onClick={() => handleDelete(pro._id)} className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</Link>
             </td>
         </tr>
           ))}

        </tbody>
    </table>
</div>

    </>
  )
}

export default ProductView
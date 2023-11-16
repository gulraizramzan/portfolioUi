import React, { useState } from 'react'
import HeaderSecond from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import ProductServices from '../utils/productServices'
import { useEffect } from 'react'
const Category = () => {
  const navigate=useNavigate()
  const [categoryProduct,setCategoryProduct]=useState([])
  const[singleProduct,setSingleProduct]=useState([])
  console.log("product>>>>>",categoryProduct)
  const{category}=useParams();

  const getDataBycategory=async()=>{
    try {
      const res= await ProductServices.get(`/get-by-categoery/${category}`)
      setCategoryProduct(res.data.data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getDataBycategory()
  },[category])
  const handleView = async (productId) => {
    try {
      const response = await ProductServices.get(
        `get-single-product/${productId}`
      );
      if (response.data.success) {
        setSingleProduct(response.data.data);
        navigate(`/productDetail/${productId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <HeaderSecond/>
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md text-center">
      <h2 className="font-serif text-2xl font-bold sm:text-3xl">products</h2>
    </div>

    <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
    {
    categoryProduct.map((product,index)=>(
<>
<article className="relative flex flex-col overflow-hidden rounded-lg border shadow-md duration-500 hover:scale-105 hover:shadow-xl" key={index+1}>
        <div className="aspect-square overflow-hidden">
          <img className="h-fit object-cover rounded-t-xl self-center" src={product.image} alt="" />
        </div>
        <div className="absolute top-0 m-2 rounded-full bg-white">
        {product.discountedPrice ===0?'': <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>}
        </div>
        <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <span class="mb-3 mt-3 text-gray-400 mr-3 uppercase text-xs">{product.brand===""?"Generic":product.brand}</span>
          <div className="mb-2 flex">
            <p className="mr-3 text-lg">${product.price}</p>
            {/* <del className="text-sm text-black-400"> {product.discountedPrice ===0?'':'$'+product.discountedPrice} </del>  */}
          </div>
          <h2 className="text-lg font-bold text-black truncate block capitalize">{product.productTitle.slice(0,20)}...</h2>
        </div>
        <button  onClick={() => handleView(product._id)} className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">See Details</div>
        </button> 
      </article>
</>
    ))
}

    </div>
  </div>
</section>
    </>
  )
}

export default Category

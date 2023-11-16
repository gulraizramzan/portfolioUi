import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate,useParams } from 'react-router-dom'
import HeaderSecond from '../components/Header'
import CartService from '../utils/cartServices'
import Rating from '../components/Rating'
import ProductServices from '../utils/productServices'
function ProductDetails(props) {
    const [singleProduct, setSingleProduct] = useState();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
  const [counter,setCounter]=useState(1)

  const getSingleProductDate = async () => {
    try {
      const response = await ProductServices.get(`/get-single-product/${id}`);
      console.log(response)
      if (response.data.success) {
        setSingleProduct(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
//end product details
// for quantity
    const handelCounter=()=>{
      
       if(counter<=9)
       {
        setCounter(counter+1)
       }else{
        setInterval(counter,1000000)
       }
    }
useEffect(()=>{
    getSingleProductDate()
},[])




// add product to cart


let quantity=counter
const addToCart = async (product) => {
    try {
      let Id= localStorage.getItem("user")
      const userId = Id;
      const newItem = {
        productId: product._id,
        quantity: quantity,
        price:product.price
      };
   
      const response = await CartService.post("/create-cart", { userId, items: [newItem]},
       navigate('/cart'),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        console.log(response.data.message);

        setCart(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log("Something Went Wrong",error);
    }
  };

  return (
    <>
    <HeaderSecond/>
    <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src={singleProduct?.image} alt=""
                                className="object-cover w-full lg:h-full "/>
                        </div>

                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                        <div className="mb-8 ">
                            <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                            {singleProduct?.productTitle}</h2>
                            <div className="flex items-center mb-6">
                             <Rating
                             value={singleProduct?.rating}
                             />
                                <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                            </div>
                            <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                            {singleProduct?.discription}
                            </p>
                            <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                <span>${singleProduct?.price}</span>
                                {/* <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">${singleProduct?.discountedPrice}</span> */}
                            </p>
                            {/* <p className="text-green-600 dark:text-green-300 ">{singleProduct?.inventory}</p> */}
                        </div>
                        <div className="w-32 mb-8 ">
                            <label htmlFor=""
                                className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button
                                 onClick={()=>setCounter(counter-1)}
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin" >-</span>
                                </button>
                                <input 
                                 onChange={(e)=>e}
                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    placeholder="1" min="1" value={counter} name='quantity' />
                                <button
                                onClick={handelCounter}
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center -mx-4 ">
                            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <button
                               onClick={() => addToCart(singleProduct)}
                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                <button
                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default ProductDetails
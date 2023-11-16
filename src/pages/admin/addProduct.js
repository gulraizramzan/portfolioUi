import React,{useState} from 'react'
import Nav from './Nav';
import ProductServices from '../../utils/productServices'
const AddProduct = () => {
    const [formData, setFormData] = useState({
        productTitle: '',
        price: '',
        discountedPrice:'0',
        category:'',
        image:'',
        brand:'',
        rating:0,
        inventory:''


    });

    const handelChanges=(event)=>{
        const {name, value}=event.target;
        console.log(formData)
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handelAddProduct=async()=>{
        let res= await ProductServices.post('/product',formData)
        console.log(res)
    }

  return (
    <>
    <Nav/>
    <section className="ml-72 max-w-5xl p-6 mx-auto bg-white rounded-md shadow-md  mt-20">
    <h1 className="text-xl font-bold text.black capitalize dark:text.black">Add product</h1>
    <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text.black dark:text-gray-200" for="username">Product Title</label>
                <input 
                name="productTitle" value={formData.productTitle}
                onChange={handelChanges}
                id="addProduct" type="text"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text.black dark:text-gray-200" for="emailAddress">Price</label>
                <input 
                name="price" value={formData.price}
                onChange={handelChanges}
                id="price" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text.black dark:text-gray-200" for="password">Discount Price</label>
                <input 
                   name="discountedPrice" value={formData.discountedPrice}
                   onChange={handelChanges}
                id="disprice" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text.black dark:text-gray-200" for="passwordConfirmation">Category</label>
                <input 
                  name="category" value={formData.category}
                  onChange={handelChanges}
                id="Category" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            {/* <div>
                <label className="text.black dark:text-gray-200" for="passwordConfirmation">Select</label>
                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>Surabaya</option>
                    <option>Jakarta</option>
                    <option>Tangerang</option>
                    <option>Bandung</option>
                </select>
            </div> */}
            {/* <div>
                <label className="text.black dark:text-gray-200" for="passwordConfirmation">Range</label>
                <input id="range" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div> */}
            <div>
                <label className="text.black dark:text-gray-200" for="passwordConfirmation">Brand</label>
                <input 
                name="brand" value={formData.brand}
                onChange={handelChanges}
                id="brand" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text.black dark:text-gray-200" for="passwordConfirmation">Inventory</label>
                <input 
                name="inventory" value={formData.inventory}
                onChange={handelChanges}
                id="inventory" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
          

           
        </div>
        <div className='mt-4 mb-4'>
                <label className="text.black dark:text-gray-200" for="passwordConfirmation">Discription</label>
                <textarea 
                 name="discription" value={formData.discription}
                 onChange={handelChanges}
                id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium text.black">
                Image
              </label>

            </div>
        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text.black" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span className="">Upload a file</span>
                      <input
                      onChange={handelChanges}
                        name="image" value={formData.image}
                      id="file-upload"  type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1 text.black">or drag and drop</p>
                  </div>
                  <p className="text-xs text.black">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
        <div className="flex justify-end mt-6">
            <button
            onClick={handelAddProduct}
            className="px-6 py-2 leading-5 text.black transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
</>
  )
}

export default AddProduct
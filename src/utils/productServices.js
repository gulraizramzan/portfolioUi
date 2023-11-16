import axios from "axios"


 const ProductServices= axios.create({
    baseURL: "http://localhost:4000/api"
})


export default ProductServices
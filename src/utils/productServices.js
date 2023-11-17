import axios from "axios"


 const ProductServices= axios.create({
    baseURL: "https://giddy-uniform-moth.cyclic.app/api"
})


export default ProductServices

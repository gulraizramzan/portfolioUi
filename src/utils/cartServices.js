import axios from "axios"


 const CartService= axios.create({
    baseURL: "http://localhost:4000/api"
})


export default CartService


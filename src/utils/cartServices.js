import axios from "axios"


 const CartService= axios.create({
    baseURL: "https://giddy-uniform-moth.cyclic.app/api"
})


export default CartService


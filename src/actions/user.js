import axios from "axios";

export const userCart= async (cart,authtoken) => {
    return await axios.post("http://localhost:5000/user/cart", {cart},
      {headers: {authtoken}});    
}

export const getuserCart= async (authtoken) => {
    const cart =await axios.get("http://localhost:5000/user/cart",
      {headers: {authtoken}}); 

    console.log("CART FROM GET",cart);
    return(cart);   
}
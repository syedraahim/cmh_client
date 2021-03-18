import react,{useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {emptyUserCart, getuserCart} from "../../actions/user";
import {loadStripe} from "@stripe/stripe-js";
import keys from "../../config/keys";
import { getSessionId} from "../../actions/stripe";

const Checkout= ({history}) => {

  const [ vendors, setVendors] = useState([]);
  const [total,setTotal] = useState(0);
  const [name, setName] = useState([]);
  
  const dispatch = useDispatch();

  const {user} = useSelector( (state) => ({...state}));

  useEffect( () => {
    getuserCart(user.token)
    .then( res => {
        setVendors(res.data.vendors);
        setTotal(res.data.cartTotal);
    }); 
  },[]);

     
   const emptyCart= () => {
     //remove from local storage
     if (typeof window !== "undefined") {
       localStorage.removeItem("cart")
     }
    //remove from redux 
    dispatch({
      type: "ADD_TO_CART",
      payload: []
    });
    // remove from backend
    emptyUserCart(user.token).then( res => {
      setVendors([]);
      setTotal(0);
      toast.success("Cart is empty. Continue shopping...");
    })
   } 

   const handleSubmit= async (e) => {
       e.preventDefault();
       console.log("FROM CHECKOUT",user.token, vendors[0].vendor.userId);
       const res= await getSessionId(user.token);
       console.log("SESSION ID",res.data.sessionId);
       const stripe= await loadStripe(keys.REACT_APP_STRIPE_KEY);
       stripe.redirectToCheckout({
           sessionId: res.data.sessionId
       }).then( (result) => console.log("RESULT",result));
   }
 
  return (
    <div className="row d-flex justify-content-center">
       <div className= "col col-md-6 ">
         <h4>Order Summary</h4>
           
         <hr />
         <h4>Helpers - {vendors.length}</h4>
         <hr />
         <h4>Selected Helpers</h4>
         {vendors.map((v, i) => (
           <div key= {i}>
             <b className="d-flex content-align-center h6"> {v.vendor.vendorInfoId.name} [{v.vendor.subcategories[0].name}] X {v.count} = {v.vendor.price}</b> 
                 
           </div>
         ))}
         <hr />
         <p className= "font-weight-bold h6">Cart Total: {total}</p>

         <div className="row">
             <div className="col col-md-6 mt-2"> 
               <button className="btn btn-primary mt-3"
                      disabled= { !vendors.length}
                      onClick= {handleSubmit}
                >Place Order</button>
             </div>
             <div className="col col-md-6 mt-4"> 
               <button className="btn btn-primary"
                       disabled= {!vendors.length}
                       onClick= {emptyCart}
               >Empty Cart</button>
             </div>             
             
         </div>
      </div>

    </div>
  )
}

export default Checkout;
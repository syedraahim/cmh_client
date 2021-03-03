import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const Cart= () => {

  const {user,cart} = useSelector( (state) => ({...state}));
  const dispatch = useDispatch();

  return (
      <div className= "container-fluid">
        <div className= "row mt-2">
         <div className= "col col-md-8">
            <h4>Cart / {cart.length} Vendors</h4> 
             { !cart.length ? <p>No helper selected. <Link to="/shop">Find a helper</Link></p>
              : ( "show cart items")
             }
         </div>
         <div className= "col col-md-4">
             <h4>Order Summary</h4>
             <hr />
             <p className= "font-weight-bold">Selected Vendor</p>
             {/* {JSON.stringify(cart)} */}
             {cart.map((c,i) => (
                 <div key={i}>
                   <p>{c.vendorInfoId.name}  {c.subcategories[0].name} =  £{c.price * c.count}</p>
                 </div>
             ))}
             
             <hr />
             {
               user ? 
               <button className= "btn btn-sm btn-primary mt-2">Proceed to Checkout</button>  
               : (
                 <button className= "btn btn-sm btn-primarymt-2">Login to Checkout</button>  
               )
             }
         </div>
        </div>
      </div>
  )
}

export default Cart;
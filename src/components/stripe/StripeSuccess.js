import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {stripeSuccessRequest} from "../../actions/stripe";
import {createOrder, emptyUserCart} from "../../actions/user";
import {LoadingOutlined} from "@ant-design/icons";

const StripeSuccess = ({history}) => {

    const {user} = useSelector( (state) => ({...state}));
    const dispatch= useDispatch();
   
    console.log("user TOKEN",user.token);
    useEffect( () => {
       stripeSuccessRequest(user.token)
       .then( (res) => {
           if (res.data.ok) {
               //empty cart from local storage
               if ( typeof window !== "undefined") localStorage.removeItem("cart");
               //empty cart from redux store
               dispatch({
                 type: "ADD_TO_CART",
                 payload: []
               });
               emptyUserCart(user.token);
               console.log("RES from stripe success", res.data)
              history.push("/user/history");
           } else {
               history.push("/stripe/cancel");
           }
       })
    },[])

    return (

       <div className="container">
        <div className="col">
            <LoadingOutlined  className="display-1 text-danger p-5"/>
         </div>
       </div> 
    )
}

export default StripeSuccess;
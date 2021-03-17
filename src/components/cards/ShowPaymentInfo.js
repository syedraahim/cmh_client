import React from "react";


const ShowPaymentInfo= ({order}) => {
  return (
      <div>
         <p className="mb-1">
           {/* <span className= "mr-2 h6">Order Id: {order.paymentIntent.id}</span>{"  "}
           <span className= "mr-2 font-weight-bold h6">Amount: {(order.paymentIntent.amount /= 100)
                           .toLocaleString("en-GB",{
                             style: "currency",
                             currency: "GBP"
                           })}</span> {"  "}
            <span className= " mr-2 h6 mb-2">Currency: {order.paymentIntent.currency.toUpperCase()}</span>{" "}
            <span className="  mr-2 h6">Payment Method: {order.paymentIntent.payment_method_types[0]}</span>{" "}
            <span className="  mr-2 h6">Payment Status: {order.paymentIntent.status.toUpperCase()}</span>{" "}
            <span className=" mr-2 h6"> Order Date: {new Date(order.paymentIntent.created * 1000).toLocaleString("en-GB")}</span>{" "} */}
            <span className= "badge-large bg-primary text-white h6">Status: {order.orderStatus}</span>
        </p> 
      </div>
  )
}

export default ShowPaymentInfo;
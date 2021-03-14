import React, { useState,useEffect } from "react";
import UserNav from "../navigation/UserNav";
import ConnectNav from "../navigation/ConnectNav";
import {getUserOrders} from "../../actions/user";
import {useSelector, useDispatch} from "react-redux";
import {CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import {toast} from "react-toastify";

const UserHistory = () => {

 const {user} = useSelector( (state) => ({...state}));
 const [orders, setOrders] = useState([]);

 useEffect( () => {
   loadUserOrders();
 },[]);

 const loadUserOrders= () => {
     getUserOrders(user.token).then ( res => {
        setOrders(res.data);
        console.log(res.data);
     });
 }

 const showEachOrder= () => 
    orders.map((order,i) => (
       <div className= "card m-5 p-3" key={i}>
           <p className= "d-flex justify-content-center h6">Show Payment Information</p>
           {showOrdersInTable(order)}
           <div className="row">
             <div className="col">
                <p className="d-flex justify-content-center h6">PDF Download</p>
             </div>
           </div>
       </div>
    )
    )

    const showOrdersInTable= (order) => (
       <p className="d-flex justify-content-center h6">Each Order and its details</p>
    )
   return(
    <div className= "container-fluid">
       <div className= "container-fluid bg-secondary p-5">
          <ConnectNav />
      </div>
        <div className= "row ml-0 text-align-top">
           <div className= "col-md-2">
               < UserNav />   
           </div>
        
       <div className= "col ">            
           {orders.length 
             ? <h3> User Orders Details</h3> 
             : <h3> No  Orders</h3>
            } 
            {showEachOrder()} 
        </div>
      </div>        
       
    </div>
   )
}

export default UserHistory;
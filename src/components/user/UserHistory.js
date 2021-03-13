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
   return(
    <div className= "container-fluid">
       <div className= "container-fluid bg-secondary p-5">
          <ConnectNav />
      </div>
        <div className= "row ml-0 text-align-top">
           <div className= "col-md-2">
               < UserNav />   
           </div>
           <div className= "col-md-6">            
             <h1> User History landing page</h1>
           </div>
        </div>
    </div>
   )
}

export default UserHistory;
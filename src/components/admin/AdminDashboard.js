import React from "react";
import AdminNav from "../navigation/AdminNav";

const AdminDashboard = () => {
   return(
    <div className= "container-fluid">
        <div className= "row ml-0 text-align-top">
           <div className= "col-md-3 mt-2 ">
               < AdminNav />   
           </div>  
           <div className= "col">
               <h1>Admin Dashboard</h1>
           </div>
        </div>
    </div>
   )
}

export default AdminDashboard;
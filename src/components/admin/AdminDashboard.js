import React from "react";
import AdminNav from "../navigation/AdminNav";

const AdminDashboard = () => {
   return(
    <div className= "container-fluid">
        <div className= "row ml-0 text-align-top">
           <div className= "col-md-6">
               < AdminNav />   
           </div>           
        </div>
    </div>
   )
}

export default AdminDashboard;
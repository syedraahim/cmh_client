import React from "react";
import VendorNav from "../navigation/VendorNav";

const VendorDashboard = () => {
    return(
    <div className= "container-fluid">
       <div className= "row ml-0 text-align-top">
           <div className= "col-md-3 mt-2 ">
               < VendorNav />   
           </div> 
           <div className= "col">
               <h1> Vendor landing page</h1>
           </div>
        </div>
    </div>
    )
}

export default VendorDashboard;
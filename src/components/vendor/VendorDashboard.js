import React from "react";
import VendorNav from "../navigation/VendorNav";
import ConnectNav from "../navigation/ConnectNav";

const VendorDashboard = () => {
    return(
    <>
    <div className= "container-fluid bg-secondary p-5">
       <ConnectNav />
    </div>
    <div className= "row ml-0 text-align-top">
           <div className= "col-md-3 mt-2 ">
               <VendorNav />   
           </div> 
           <div className= "col">
               <h2 className= "font-weight-bold "> Your Current Categories</h2>
           </div>
        </div>
    
    </>
    )
}

export default VendorDashboard;
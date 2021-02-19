import React, {useState, useEffect} from "react";
import {getVendorCategory } from "../../actions/vendor";
import SingleVendor from "../cards/SingleVendor";

const VendorDetails= ({match}) => {

 const [vendor, setVendor] = useState("");
 
 const vendorId= match.params.id;

 useEffect( () => {
     loadVendorDetails(); 
 },[vendorId]);

 const loadVendorDetails= () => {
      getVendorCategory(vendorId)
      .then ( (res) => setVendor(res.data))
      .catch ( (err) => {
          console.log(err);
      });
 }

 return (
     <div className= "container">
       <div className= "row pt4">
           <SingleVendor vendor= {vendor} />
       </div>
         
     </div>
 )
}

export default VendorDetails;
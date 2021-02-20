import React, {useState, useEffect} from "react";
import {getVendorCategory } from "../../actions/vendor";
import SingleVendor from "../cards/SingleVendor";

const VendorDetails= ({match}) => {

 const [vendor, setVendor] = useState("");
 const [loading,setLoading] = useState(false);
 const {id} = match.params;
 
 useEffect( () => {
     loadVendorDetails(); 
 },[id]);

 const loadVendorDetails= () => {
     setLoading(true);
      getVendorCategory(id)
      .then ( (res) => {
               setVendor(res.data)
               setLoading(false);
            }) 
      .catch ( (err) => {
          console.log(err);
      });
 }

 return (
     <div className= "container">
       <div className= "row pt4">
        { loading ? <h1>Loading...</h1>
                :  <SingleVendor vendor= {vendor}  /> }          
       </div>        
     </div>
 )
}

export default VendorDetails;
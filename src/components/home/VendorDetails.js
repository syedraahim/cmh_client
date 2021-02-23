import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {getVendorCategory, vendorRating } from "../../actions/vendor";
import SingleVendor from "../cards/SingleVendor";

const VendorDetails= ({match}) => {

 const {user}  = useSelector( state => ({ ...state})); 
 const [vendor, setVendor] = useState("");
 const [loading,setLoading] = useState(false);
 const [rating,setRating] = useState(0);
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

 const onRatingClick = (newRating,name) => {    
    setRating(newRating);
    console.log("rating",rating,name,user.token);
    vendorRating(name,rating, user.token)
    .then ( (res) => {
       console.log("Rating values",res);
        loadVendorDetails();
    })
    console.log(newRating,name);
 }

 return (
     <div className= "container">
       <div className= "row pt4">
        { loading ? <h1>Loading...</h1>
                :  <SingleVendor vendor= {vendor}  
                                 onRatingClick= {onRatingClick}
                                 rating= {rating}
                                 /> 
        }          
       </div>        
     </div>
 )
}

export default VendorDetails;
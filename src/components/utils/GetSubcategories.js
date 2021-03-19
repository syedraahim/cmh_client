import React, {useState, useEffect} from "react";
import {fetchSubcategories} from "../../actions/subcategory";

const GetSubcategories= () => {

    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetchSubcategories().then(res => setSubcategories(res.data));
    },[]);

 return(                  
    <select 
         name= "subcategory"   
         className= "form-control location-search-input mt-3 mb-3 font-weight-bold h6"
         placeholder= "Helper Category...."
         width="500px"
         onChange= { subcategory => setSubcategories(subcategory)}
     > 
    <option value="">Select a Sub Category</option>                  
   { subcategories && subcategories.map( (s) => {
   return (  <option key= {s._id} value= {s._id}>
          {s.name}
     </option> ) }
   )}
   </select> 

 )    

}

export default GetSubcategories;
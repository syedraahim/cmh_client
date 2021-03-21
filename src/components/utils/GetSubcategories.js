import React, {useState, useEffect} from "react";
import {fetchSubcategories} from "../../actions/subcategory";
import {Select} from "antd";
const {Option} = Select;

const GetSubcategories= () => {

    const [subcategories, setSubcategories] = useState([]);
    const [subcategory,setSubcategory]= useState("");

    useEffect(() => {
        fetchSubcategories().then(res => setSubcategories(res.data));
    },[]);

 return(                  
    <Select 
         name= "subcategory"   
         className= "form-control mt-3 mb-3 font-weight-bold h6"
         style={{width:"500px"}}         
         onChange= { subcategory => setSubcategory(subcategory)}
     > 
    <Option value="">Select a Sub Category</Option>                  
   { subcategories && subcategories.map( (s) => {
   return (  <Option key= {s._id} value= {s._id}>
          {s.name}
     </Option> ) }
   )}
   </Select> 

 )    

}

export default GetSubcategories;
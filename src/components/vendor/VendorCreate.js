import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import {useSelector} from "react-redux";
import VendorNav from "../navigation/VendorNav";
import {addVendor} from "../../actions/vendor";
import { Select } from "antd";

const initialState= {
   postcode: "",
   name: "",
   description: "",
   houseno: "",
   address1: "",
   address2: "",
   city: "",
   county: "",
   country: "",
   categories: [],
   category: "",
   subcategory: [],
   price: "",
   pricetypes: ["Hourly", "Job", "Daily"],
   pricetype: "",
   images: []
}


const VendorCreate = () => {

 const {user} = useSelector( state => ({...state}));   
 const [values, setValues] = useState(initialState);  

 const {postcode,
        name,
        description,
        houseno,
         address1,
         address2,
         city,
         county,
         country,
         categories,
         category,
         subcategory,
         price,
         pricetypes,
         pricetype,
         images 
      }  = values;

    const handleChange= (e) => {  
        setValues({ ...values, [e.target.name] : e.target.value});
        console.log(e.target.name, ".....", e.target.value);
    }

    
    const handleSubmit = (e) => {
        e.PreventDefault();
        addVendor(values, user.token)
        .then ( (res) => {
            console.log(res);
        })
        .catch ( (err) => {
           console.log(err);
           if(err.response===400) 
                 toast.error(err.response.data);
            else
                 toast.error(err.response);
        }) 
   }
  

    return (
        <div className= "row">
           <div className= "col col-md-2">
              <VendorNav />
           </div>
           <div className= "col col-md-10">
              <h2>Vendor Details Form</h2>
              <form onSubmit= {handleSubmit}>
              <section className= "vendor-center">
                <div className= "form-group">
                  <label className= "admin-class">Name</label>
                  <input
                    type= "text"
                    name= "name"
                    className= "form-control"
                    value= {name}
                    onChange= {handleChange}
                    autoFocus
                   />
                                  
                  <label className= "admin-class">Postcode</label>
                  <input
                    type= "text"
                    name= "postcode"
                    className= "form-control"
                    value= {postcode}
                    onChange= {handleChange}
                   />
                  <label className= "admin-class">House No</label>
                  <input
                    type= "text"
                    name= "houseno"
                    className= "form-control"
                    value= {houseno}
                    onChange= {handleChange}
                   />
                  <label className= "admin-class">Address Line 1</label>
                  <input
                    type= "text"
                    name= "address1"
                    className= "form-control"
                    value= {address1}
                    onChange= {handleChange}
                   />
                  <label className= "admin-class">Address Line 2</label>
                  <input
                    type= "text"
                    name= "address2"
                    className= "form-control"
                    value= {address2}
                    onChange= {handleChange}
                   />
                  <label className= "admin-class">City</label>
                  <input
                    type= "text"
                    name= "city"
                    className= "form-control"
                    value= {city}
                    onChange= {handleChange}
                   />
                   <label className= "admin-class">County</label>
                  <input
                    type= "text"
                    name= "county"
                    className= "form-control"
                    value= {county}
                    onChange= {handleChange}
                   />
                   <label className= "admin-class">Country</label>
                   <input
                    type= "text"
                    name= "country"
                    className= "form-control"
                    value= {country}
                    onChange= {handleChange}
                   />
                   <label className= "admin-class">Description</label>
                  <input
                    type= "textarea"
                    name= "description"
                    className= "form-control"
                    value= {description}
                    onChange= {handleChange}
                   />  
                   
                   <label className= "admin-class">Price Type</label>
                   <Select
                     name= "pricetype"
                     className= "form-control"
                     onChange= {handleChange}
                   >
                    <option>Select a price type</option> 
                    { pricetypes.map ( (ptype) => {                    
                     <option key= {ptype} value={ptype}> {ptype} </option>
                     })
                   }               
                   </Select>
                   <label className= "admin-class">Price</label>
                   <input
                    type= "number"
                    name= "price"
                    className= "form-control"
                    value= {price}
                    onChange= {handleChange}
                   />
                 </div>
                 <div className= "d-flex justify-content-center mt-1 mb-2 ">
                    <button type="submit" className = "btn btn-primary font-weight-bold " name="category">Save</button>  
                 </div> 
              </section>
              </form>
           </div>

        </div>
    )
}


export default VendorCreate;
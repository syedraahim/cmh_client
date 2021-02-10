import React from "react";
import { Select } from "antd";
const {Option} = Select;

const VendorForm = ( {handleSubmit, 
                     handleChange,
                     handleCategoryChange,
                     subOptions,
                     showSubs,
                     values,
                     setValues,
                     name, 
                     postcode,
                     houseNo,
                     addressLine1,
                     addressLine2, 
                     city,
                     county,
                     country,
                    categories,
                    subcategories,
                    description,
                    pricetypes,
                    price,
                    }) =>  {

    const renderFields= () => {
        return (
            <form onSubmit= {handleSubmit}>
            <section >
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
                  name= "houseNo"
                  className= "form-control"
                  value= {houseNo}
                  onChange= {handleChange}
                 />
                <label className= "admin-class">Address Line 1</label>
                <input
                  type= "text"
                  name= "addressLine1"
                  className= "form-control"
                  value= {addressLine1}
                  onChange= {handleChange}
                 />
                <label className= "admin-class">Address Line 2</label>
                <input
                  type= "text"
                  name= "addressLine2"
                  className= "form-control"
                  value= {addressLine2}
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

                  <label className= "admin-class">Category</label>
                 <select
                   name= "category"
                   className= "form-control"
                   onChange= { handleCategoryChange}
                 >
                 <option>Select a Category</option>
                 {categories.length > 0 && categories.map( (c) => (
                    <option key= {c._id} value= {c._id}> {c.name}</option>
                 ))
                 }
                 </select> 

                 { showSubs && (
                 <div>
                  <label className= "admin-class mt-1">Subcategories</label>
                  <Select mode= "multiple"
                          style={{ width: '100%' }}
                          placeholder= "Select a Sub category"
                          className= "admin-class"
                          value= {subcategories}
                          onChange= { (value) => setValues({...values, subcategories: value})}
                  >
                     { subOptions.length && subOptions.map( (s) => (
                         <Option key= {s._id} value= {s._id}>
                            {s.name}
                         </Option>
                     ))}
                  </Select>                  
                 </div>
                 )}
                 
                 <label className= "admin-class">Price Type</label>``
                 <select
                   name= "pricetype"
                   className= "form-control"
                   onChange= {handleChange}
                 >
                  <option>Select a price type</option> 
                  {pricetypes.map((c) => (
                  <option key={c} value={c}>
                  {c}
                 </option>
                 ))}         
                 </select>
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
        ) 
    }            
    
   
        return(   
            <div>             
               {renderFields()}        
            </div>        
        )
    }



 export default VendorForm;

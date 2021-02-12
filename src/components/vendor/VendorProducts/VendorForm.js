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
                     email,
                     userid,
                     user,                                       
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
                <label className= "admin-class">Email</label>
                <input
                  type= "text"
                  disabled= "disabled"
                  name= "email"s
                  className= "form-control"
                  value= {email}                 
                 />                            
                
                 <label className= "admin-class">Description</label>
                <textarea
                  name= "description"
                  rows="2"
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
                  <label className= "admin-class mt-1 mb-1">Subcategories</label>
                  <Select mode= "multiple"
                          style={{ width: '100%' }}
                          placeholder= "Select a Sub category"
                          className= "font-weight:600"
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
               <div className= "d-flex justify-content-center mt-1">
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

import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import {useSelector} from "react-redux";
import VendorNav from "../../navigation/VendorNav";
import {addVendor} from "../../../actions/vendor";
import VendorForm from "./VendorForm";
import {fetchCategories, fetchCategorySubs} from "../../../actions/category";


const initialState= {
   description: "",
   categories: [],
   category: "",
   subcategories: [],
   subcategory: "",
   price: "",
   pricetypes: ["Hourly", "Job", "Daily"],
   pricetype: "Hourly",
   images: []
}

const VendorCreate = () => {

 const {user} = useSelector( state => ({...state}));   
 const [values, setValues] = useState(initialState); 
 const [subOptions, setSubOptions] = useState([]);
 const [ showSubs, setShowSubs] = useState(false);
 
 const {
   email,
   userId,
   description,
  categories,
  subcategories,
  category, 
   price,
   pricetypes,
   pricetype  
}  = values;

 useEffect( () => {
    getCategories();
 }, []);

 const getCategories= () => {
    fetchCategories().then( (res) => setValues({ ...values, subcategories:[], categories: res.data}));
 }

  const handleChange= (e) => {  
        setValues({ ...values, [e.target.name] : e.target.value});
        console.log(e.target.name, ".....", e.target.value);
    }

  const handleCategoryChange= (e) => {
    e.preventDefault();
    console.log("Category SELECTED", e.target.value);
    setValues({ ...values,subs: [], category: e.target.value});
    fetchCategorySubs(e.target.value)
    .then ( (res) => {
      console.log("VALUE from  SUBCAT", res.data);
      setSubOptions(res.data)
    })
    .catch ( (err) => {
       console.log(err);
    })
    setShowSubs(true);
  }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values,  userId: user._id, email:user.email}); 
        addVendor(values, user.token)
        .then ( (res) => {
            console.log(res);
            window.alert(`Vendor is created successfully !!!!` );
            window.location.reload();
        })
        .catch ( (err) => {
           console.log(err);
           toast.error(err.response);            
        });        
   }
  

    return (
        <div className= "row">
           <div className= "col col-md-2">
              <VendorNav />
           </div>
           <div className= "col col-md-10">
             <section className= "vendor-center">
              <h2 className= "card-header font-weight-bold">Vendor Categories Form</h2>  
              <div className = "card " >
               <div className= " card-body mb-1 " >   
              <VendorForm 
                 handleSubmit= {handleSubmit}
                 handleChange= {handleChange}
                 email= {user.email}
                 userId={user._Id}
                 user={user}  
                 description= {description}
                 pricetypes= {pricetypes}
                 price= {price}
                 categories= {categories}
                 subcategories= {subcategories}
                 handleCategoryChange= {handleCategoryChange}
                 subOptions= {subOptions}
                 showSubs= {showSubs}
                 values= {values}
                 setValues= {setValues}
              /> 
             </div>
             </div>
             </section>
           </div>

        </div>
    )
}


export default VendorCreate;
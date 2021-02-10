import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import {useSelector} from "react-redux";
import VendorNav from "../../navigation/VendorNav";
import {addVendor} from "../../../actions/vendor";
import VendorForm from "./VendorForm";
import {fetchCategories, fetchCategorySubs} from "../../../actions/category";


const initialState= {
   postcode: "",
   name: "",
   description: "",
   houseNo: "",
   address1: "",
   address2: "",
   city: "",
   county: "",
   country: "United Kingdom",
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
 
 const {postcode,
  name,
  description,
  houseNo,
  addressLine1,
  addressLine2,
  city,
  county,
  country,
  categories,
  subcategories,
  category,
  subcategory,
   price,
   pricetypes,
   pricetype,
   images 
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
    setValues({ ...values, category: e.target.value});
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
              <h2 className= "font-weight-bold">Vendor Details Form</h2>  
              
              {JSON.stringify(values.subcategories)}
              <VendorForm 
                 handleSubmit= {handleSubmit}
                 handleChange= {handleChange}
                 name= {name}
                 postcode= {postcode}
                 houseNo = {houseNo}
                 addressLine1= {addressLine1}
                 addressLine2= {addressLine2}
                 city= {city}
                 county= {county}
                 country= {country}
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
    )
}


export default VendorCreate;
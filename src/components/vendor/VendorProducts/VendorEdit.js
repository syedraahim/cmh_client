import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import VendorNav from "../../navigation/VendorNav";
import {fetchCategories, fetchCategorySubs} from "../../../actions/category";
import {fetchVendorInfo} from "../../../actions/vendorInfo";
import {getVendorCategory} from "../../../actions/vendor";
import VendorUpdateForm from "./VendorUpdateForm";

const VendorEdit = ({match}) => {

   const {user} = useSelector( (state) => ({...state}));
   const [loading,setLoading] = useState(false);
   const [categories, setCategories]= useState([]);
   const [subOptions, setSubOptions] = useState([]);
   const [arrOfSubIds, setArrOfSubIds]= useState([]);

   const initialState= {  
    userId: user._id, 
    vendorInfoId: "" ,
    description: "",   
    category: "",
    subcategories: [],
    subcategory: "",
    price: "",
    pricetypes: ["Hourly", "Job", "Daily"],
    pricetype: "",
    images: [],
 }
  
  const [values, setValues] = useState(initialState);
  console.log("values before set",values);

   useEffect( () => {
     loadVendorCategory();
     loadCategories();
   }, []);

   const loadVendorCategory= () => {
        setLoading(true);
        getVendorCategory(match.params.id)
        .then ( (cat) => {
            setValues({...values, ...cat.data});
            fetchCategorySubs(cat.data.category._id)
              .then ( res => setSubOptions(res.data));
             let arr= [];
             cat.data.subcategories.map( (s) => {
                 arr.push(s._id)
             });
             console.log("ARR", arr);
             setArrOfSubIds((prev) => arr); 
        })
        .catch ( (err) => {
            console.log(err);
            toast.error(err.response);
        })
   }

   const loadCategories= () => {
       fetchCategories().then ( (res) => setCategories( res.data));
   }   

   const handleChange= (e) => {  
      setValues({ ...values, [e.target.name] : e.target.value});     
    // console.log(("Values from handlechange"),values);
   }

  const handleCategoryChange= (e) => {
    e.preventDefault();   
    setValues({ ...values,subcategories: [], category: e.target.value});
    fetchCategorySubs(e.target.value)
    .then ( (res) => {      
      setSubOptions(res.data)
    })
    .catch ( (err) => {
       console.log(err);
    })    
  }

   const handleSubmit= (e) => {
       e.preventDefault();
   }

    return (
        <div className= "row">
          <div className= "col col-md-2">
            <VendorNav />
          </div>
          <div className= "col col-md-10 vendor-center">         
            <h2 className= "font-weight-bold mb-2">Change Categories </h2>
            {JSON.stringify(values)}
            <VendorUpdateForm 
                handleSubmit= {handleSubmit}
                handleChange= {handleChange}
                setvalues= {setValues}
                values= {values}
                user= {user}
                categories= {categories}
                subOptions= {subOptions}
                arrOfSubIds= {arrOfSubIds}
                setArrOfSubIds= {setArrOfSubIds}
                handleCategoryChange= {handleCategoryChange}

            />
          </div>
        </div>
    )
}

export default VendorEdit;
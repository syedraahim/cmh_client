import axios from "axios";
import history from "../history";
import {
    CREATE_SUBCATEGORY,
    FETCH_SUBCATEGORIES,
    FETCH_SUBCATEGORY,
    EDIT_SUBCATEGORY,
    DELETE_SUBCATEGORY
} from "../actions/types";

//action creator for Subcategory Master
export const addSubcategory =  async (values, authtoken) =>  {
    const res = await axios.post("http://localhost:5000/api/subcategory",values,
    {headers: {authtoken}});
    history.push("/admin/subcategories/subcategorieslist");
  };
 
  export const fetchSubcategories = async () =>  {
     return await axios.get("http://localhost:5000/api/subcategories");
  };
 
  export const fetchSubcategory = async (slug) =>  {
     return await axios.get(`http://localhost:5000/api/subcategory/${slug}`);    
  };
 
  export const editSubcategory = async (slug,formValues,authtoken) =>  {
    console.log("Formvalues from edit subcategory",formValues);
     const res = await axios.put(`http://localhost:5000/api/subcategory/${slug}`,formValues,
      {headers: {authtoken}});  
      console.log("Response from edit subcat",res); 
      history.push("/admin/subcategories/subcategorieslist");
  };
 
 export const deleteSubcategory = async (slug, authtoken) => {
     await axios.delete(`http://localhost:5000/api/subcategory/${slug}`,
     { headers: {authtoken} });
     history.push("/admin/subcategories/subcategorieslist");
   };

   
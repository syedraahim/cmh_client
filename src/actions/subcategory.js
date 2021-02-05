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
    //  dispatch({ type: FETCH_SUBCATEGORIES, payload: res.data });
  };
 
  export const fetchSubcategory = (slug) => async dispatch => {
     return await axios.get(`http://localhost:5000/api/subcategory/${slug}`);
    //  dispatch({ type: FETCH_SUBCATEGORY, payload: res.data });
  };
 
  export const editSubcategory = (slug, formValues) => async dispatch => {
    console.log("Formvalues from edit subcategory",formValues);
     const res = await axios.put(`http://localhost:5000/api/subcategory/${slug}`,formValues);
     dispatch( { type: EDIT_SUBCATEGORY, payload: res.data });
     history.push("/admin/subcategories/subcategorieslist");
  };
 
 export const deleteSubcategory = async (slug) => {
     await axios.delete(`http://localhost:5000/api/subcategory/${slug}`);
     history.push("/admin/subcategories/subcategorieslist");
   };
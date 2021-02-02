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
export const addSubcategory = (values) => async dispatch => {
    const res = await axios.post("http://localhost:5000/api/subcategory",values);
    dispatch({type: CREATE_SUBCATEGORY, payload: res.data });
    history.push("/admin/subcategories/subcategorieslist");
  };
 
  export const fetchSubcategories = () => async dispatch => {
     const res = await axios.get("http://localhost:5000/api/subcategories");
     dispatch({ type: FETCH_SUBCATEGORIES, payload: res.data });
  };
 
  export const fetchSubcategory = (slug) => async dispatch => {
     const res = await axios.get(`http://localhost:5000/api/subcategory/${slug}`);
     dispatch({ type: FETCH_SUBCATEGORY, payload: res.data });
  };
 
  export const editSubcategory = (slug, formValues) => async dispatch => {
    console.log("Formvalues from edit subcategory",formValues);
     const res = await axios.put(`http://localhost:5000/api/subcategory/${slug}`,formValues);
     dispatch( { type: EDIT_SUBCATEGORY, payload: res.data });
     history.push("/admin/subcategories/subcategorieslist");
  };
 
 export const deleteSubcategory = (slug) => async dispatch => {
     await axios.delete(`http://localhost:5000/api/subcategory/${slug}`);
     dispatch({type: DELETE_SUBCATEGORY, payload: slug });
     history.push("/admin/subcategories/subcategorieslist");
   };
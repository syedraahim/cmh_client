import axios from "axios";
import history from "../history";
import { CREATE_CATEGORY,
         FETCH_CATEGORIES,
         FETCH_CATEGORY,
         EDIT_CATEGORY,
         DELETE_CATEGORY}
 from "../actions/types";


//action creators for Categories master


export const fetchCategories = () => async dispatch => {
   const res= await axios.get("http://localhost:5000/api/category");
   dispatch({type: FETCH_CATEGORIES, payload: res.data });     
  };

export const fetchCategory = (slug) => async dispatch => {
    const res= await axios.get("http://localhost:5000/api/category/${slug}");
    dispatch({type: FETCH_CATEGORY, payload:res.data });
  };

  export const addCategory = (authtoken,formvalues) =>  async dispatch => {
    const res = await axios.post("http://localhost:5000/api/category",
    {header: {authtoken}}
    ,formvalues);
    dispatch({type: CREATE_CATEGORY, payload: res.data });
    history.push("/admin/categories/categorieslist");
  };

  export const editCategory = (slug, formValues, authtoken) => async dispatch => {
      const res= await axios.put(`${process.env.REACT_APP_API}/category/${slug}`,
       {headers: {
           authtoken
       }},formValues);
      dispatch({type:EDIT_CATEGORY, payload: res.data });
      history.push("/admin/categories/categorieslist"); 
   };  
 
export const deleteCategory =(slug, authtoken) => async dispatch => {
  await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`,
   { headers: {
       authtoken
   }
 }); 
  dispatch({type: DELETE_CATEGORY, payload: slug});
  history.push("/admin/categories/categorieslist");
  };
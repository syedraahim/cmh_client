import axios from "axios";
import { formValues } from "redux-form";
import history from "../history";
import addressDistance from "../apis/addressDistance";
import {FETCH_USER, 
        FETCH_DISTANCE,
        SUBMIT_VENDOR, 
        CREATE_VENDOR,
        CREATE_CATEGORY,
        FETCH_CATEGORIES,
        FETCH_CATEGORY,
        EDIT_CATEGORY,
        DELETE_CATEGORY,
        FETCH_CATEGORIES_NAME,
        CREATE_QUESTION  
      } from "./types";

export const fetchDistance = () =>
{
  return ( async (dispatch) => {
    const response = await addressDistance.get("/json?origins");
    dispatch({type: FETCH_DISTANCE, payload: response});
  });
}

export const fetchUser = () =>
{
 return (async (dispatch) => {
  const res= await axios.get("/api/current_user");
   dispatch({type: FETCH_USER, payload:res.data});
 })
}
//action creators for Categories master
export const addCategory = (values) => {
   return( async (dispatch) => {
    const res = await axios.post("http://localhost:5000/api/category",values);
    dispatch({type: CREATE_CATEGORY, payload: res.data });
    history.push("/admin/categories/categorieslist");
  });
};

export const fetchCategories = () => async (dispatch) => {
   const res= await axios.get("http://localhost:5000/api/category");
   console.log("Response from fetch categories:",res.data);
   dispatch({type: FETCH_CATEGORIES, payload: res.data});
     
  };

  export const editCategory = (id, formValues) => {
    return( async (dispatch) => {
      const res= await axios.patch(`http://localhost:5000/api/category/${id}`,formValues);
      dispatch({type:EDIT_CATEGORY, payload: res.data});
      history.push("/admin/categories/categorieslist");
    });
  };

export const fetchCategory = (id) => {
  return( async (dispatch) => {
    const res= await axios.get(`http://localhost:5000/api/category/${id}`);
    dispatch({type: FETCH_CATEGORY, payload:res.data});
  });
};

export const deleteCategory =(id) => {
  return( async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/category/${id}`);  
  dispatch({type: DELETE_CATEGORY, payload: id});
  history.push("/admin/categories/categorieslist");
  });
};

//util for fetching the category name
export const fetchCategoriesName = () => async (dispatch) => {
  const res= await axios.get("http://localhost:5000/api/categoryname");
  console.log("Response from fetch categories name:", res.data);
  dispatch({type: FETCH_CATEGORIES_NAME, payload: res.data});    
 };

 //action creator for Questions Master
 export const addQuestion = (values) => {
   return( async (dispatch) => {
       const res = await axios.post("http://localhost:5000/api/questions", values);
       dispatch({type: CREATE_QUESTION, payload: res.data});
   })
 }

//action creator for Vendors
export const submitVendor = (values, history) => {
  return ( async (dispatch) => {
    console.log("values from vendor action creator:",values);
     const res = await axios.post("http://localhost:5000/api/vendor", values);
         //  history.push("/");
    //  window.location.href = '/'
     dispatch({type: SUBMIT_VENDOR, payload:res.data});
  })    
}

export const submitVendorCategories = (values,history) => {
   return (async (dispatch) => {
     const res= await axios.post("http://localhost:5000/api/vendorcategories",values);
     //  history.push("/");
    window.location.href = '/'
   })
}





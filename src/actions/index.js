import axios from "axios";
import { formValues } from "redux-form";
import history from "../history";
import addressDistance from "../apis/addressDistance";
import {FETCH_USER, 
        FETCH_DISTANCE,
        SUBMIT_VENDOR, 
        CREATE_VENDOR,        
        FETCH_CATEGORIES_NAME,
        FETCH_SUBCATEGORIES_NAME,
        FETCH_SUBCATEGORIES_CATEGORIES,
        FETCH_QUESTIONS_NAME,        
        CREATE_QUESTION,  
        FETCH_QUESTIONS,
        FETCH_QUESTION,
        DELETE_QUESTION,
        EDIT_QUESTION,
        CREATE_SUBCAT_QUESTION,
        FETCH_SUBCAT_QUESTIONS,
        FETCH_SUBCAT_QUESTION,
        EDIT_SUBCAT_QUESTION,
        DELETE_SUBCAT_QUESTION
      } from "./types";

export const fetchDistance = () =>  async dispatch => {
    const res = await addressDistance.get("/json?origins");
    dispatch({type: FETCH_DISTANCE, payload: res.data});
  };

export const fetchUser = () => async (dispatch) => {
  const res= await axios.get("/api/current_user");
   dispatch({type: FETCH_USER, payload:res.data});
 };


 

 

  //fetching the list of subcategory names
 export const fetchSubcategoriesName = () => async dispatch => {  
  const res= await axios.get("http://localhost:5000/api/subcategory");
  dispatch( {type: FETCH_SUBCATEGORIES_NAME, payload: res.data });
}

 //action creator for Questions Master
 export const addQuestion = (values) => async dispatch => {
      console.log("In questions action creator", values);
       const res = await axios.post("http://localhost:5000/api/questions", values);
       dispatch({type: CREATE_QUESTION, payload: res.data });
       history.push("/admin/questions/questionslist");
   }; 

 export const fetchQuestions = () => async dispatch => {
     const res = await axios.get("http://localhost:5000/api/questions");
     dispatch({ type: FETCH_QUESTIONS, payload: res.data })
   }; 

 export const fetchQuestion = (id) => async dispatch => {
     const res= await axios.get(`http://localhost:5000/api/questions/${id}`) ;
     dispatch({ type: FETCH_QUESTION, payload: res.data })
   }; 

 export const editQuestion = (id,formValues) => async dispatch => {
     const res= await axios.put(`http://localhost:5000/api/questions/${id}`,formValues);
     dispatch({ type: EDIT_QUESTION, payload: res.data });
     history.push("/admin/questions/questionslist");
   }; 

 export const deleteQuestion = (id) => async dispatch => {
     const res= await axios.delete(`http://localhost:5000/api/questions/${id}`);
     console.log("Response from delete question:",res.data );
     dispatch({ type: DELETE_QUESTION, payload: id });
     history.push("/admin/questions/questionslist");
  }; 

  // fetching the list of questions
 export const fetchQuestionsName = () => async dispatch => {
  const res= await axios.get("http://localhost:5000/api/questions");
  dispatch( {type: FETCH_QUESTIONS_NAME, payload: res.data });
}

 //action creator for subcategory questions
 export const addSubcatQuestion = (values) => async dispatch => {
    const res= await axios.post("http://localhost:5000/api/subcatquestions",values);   
     dispatch({type: CREATE_SUBCAT_QUESTION, payload: res.data });
     history.push("/admin/subcatquestions/subcatquestionslist");       
   };

 export const fetchSubcatQuestions = () => async dispatch => {
   const res= await axios.get("http://localhost:5000/api/subcatquestions");
   console.log("Output from fetch subcat QUES",res);
   dispatch({ type: FETCH_SUBCAT_QUESTIONS, payload: res.data });
   }; 

 export const fetchSubcatQuestion = (id) => async dispatch => {
   const res= await axios.get(`http://localhost:5000/api/subcatquestions/${id}`);
   dispatch({ type: FETCH_SUBCAT_QUESTION, payload: res.data })
   }; 

 export const editSubcatQuestion = (id,formValues) => async dispatch => {
   const res = await axios.patch(`http://localhost:5000/api/subcatquestions/${id}`,formValues) ;
   dispatch({ type: EDIT_SUBCAT_QUESTION, payload: res.data }) 
  }; 

 export const deleteSubcatQuestion = (id) => async dispatch => {
   const res = await axios.delete(`http://localhost:5000/api/subcatquestions/${id}`);
   dispatch( { type: DELETE_SUBCAT_QUESTION, payload: id });  
   history.push("/admin/subcatquestions/subcatquestionslist");
   };
  

//action creator for Vendors
export const submitVendor = (values, history) => async dispatch => {
    console.log("values from vendor action creator:",values);
     const res = await axios.post("http://localhost:5000/api/vendor", values);
         //  history.push("/");
    //  window.location.href = '/'
     dispatch({type: SUBMIT_VENDOR, payload: res.data });
  }; 

export const submitVendorCategories = (values,history) => async dispatch => {
     const res= await axios.post("http://localhost:5000/api/vendorcategories",values);
     //  history.push("/");
    window.location.href = '/'
 };





 



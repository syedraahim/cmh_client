import axios from "axios";
import history from "../history";

//action creator for Questions Master
export const addQuestion = (values) => async dispatch => {
    console.log("In questions action creator", values);
     const res = await axios.post("http://localhost:5000/api/questions", values);
    //  dispatch({type: CREATE_QUESTION, payload: res.data });
     history.push("/admin/questions/questionslist");
 }; 

export const fetchQuestions = async () =>  {
   return await axios.get("http://localhost:5000/api/questions");  
 }; 

export const fetchQuestion = (id) => async dispatch => {
   const res= await axios.get(`http://localhost:5000/api/questions/${id}`) ;
//    dispatch({ type: FETCH_QUESTION, payload: res.data })
 }; 

export const editQuestion = (id,formValues) => async dispatch => {
   const res= await axios.put(`http://localhost:5000/api/questions/${id}`,formValues);
//    dispatch({ type: EDIT_QUESTION, payload: res.data });
   history.push("/admin/questions/questionslist");
 }; 

export const deleteQuestion = (id) => async dispatch => {
   const res= await axios.delete(`http://localhost:5000/api/questions/${id}`);
   console.log("Response from delete question:",res.data );
//    dispatch({ type: DELETE_QUESTION, payload: id });
   history.push("/admin/questions/questionslist");
}; 

import axios from "axios";
import history from "../history";

//action creator for Questions Master
export const addQuestion =  async (values,authtoken) =>  {
    console.log("In questions action creator", values);
     const res = await axios.post("http://localhost:5000/api/question", values,
     { headers: {authtoken} });   
     history.push("/admin/questions/questionslist");
 }; 

export const fetchQuestions = async () =>  {
   return await axios.get("http://localhost:5000/api/questions");  
 }; 

export const fetchQuestion = async (id) =>  {
   return await axios.get(`http://localhost:5000/api/question/${id}`) ;
 }; 

export const editQuestion = (id,formValues) => async dispatch => {
   const res= await axios.put(`http://localhost:5000/api/questions/${id}`,formValues);
//    dispatch({ type: EDIT_QUESTION, payload: res.data });
   history.push("/admin/questions/questionslist");
 }; 

export const deleteQuestion = async (id,authtoken) =>  {
   const res= await axios.delete(`http://localhost:5000/api/question/${id}`,
   { headers: {authtoken} }); 
   console.log("Response from delete question:",res.data );
   history.push("/admin/questions/questionslist");
}; 

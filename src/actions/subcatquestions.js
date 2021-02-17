import axios from "axios";
import history from "../history";

//action creator for subcategory questions
export const addSubcatQuestion = async (values) =>  {
    const res= await axios.post("http://localhost:5000/api/subcatquestions",values);    
     history.push("/admin/subcatquestions/subcatquestionslist");       
   };

 export const fetchSubcatQuestions = async () =>  {
   return await axios.get("http://localhost:5000/api/subcatquestions");     
   }; 

 export const fetchSubcatQuestion = async (id) =>  {
   return await axios.get(`http://localhost:5000/api/subcatquestions/${id}`); 
   }; 

 export const editSubcatQuestion = async (id,formValues) =>  {
   const res = await axios.patch(`http://localhost:5000/api/subcatquestions/${id}`,formValues) ; 
   history.push("/admin/subcatquestions/subcatquestionslist");
  }; 

 export const deleteSubcatQuestion = async (id) =>  {
   const res = await axios.delete(`http://localhost:5000/api/subcatquestions/${id}`);  
   history.push("/admin/subcatquestions/subcatquestionslist");
   };
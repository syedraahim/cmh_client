import axios from 'axios';

export const createOrUpdateUser = async (authtoken) => {
    return  await axios.post( "http://localhost:5000/api/auth/createupdateuser", {},
     {headers: {authtoken} });           
   }

export const currentUser = async (authtoken) => {
    return  await axios.post( "http://localhost:5000/api/auth/currentuser", {},
     {headers: {authtoken} });           
   }

export const adminUser = async (authtoken) => {
    return  await axios.post( "http://localhost:5000/api/auth/adminuser", {},
     {headers: {authtoken} });           
 }

 export const vendorUser = async (authtoken) => {
  return  await axios.post( "http://localhost:5000/api/auth/vendoruser", {},
   {headers: {authtoken} });           
}

export const updateUserInLocalStorage= (token,next) => {
  if(window.localStorage.getItem("user")) {
    let user= JSON.parse(localStorage.getItem("user"));
    user.token= token;
    localStorage.setItem("user",JSON.stringify(user));
    next();
  }
}
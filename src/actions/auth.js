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
import axios from "axios";

export const createConnectAccount= async (authtoken) => {
    return await axios.post("http://localhost:5000/api/create-connect-account", {},
      {headers: {authtoken}});    
}

export const getAccountStatus= async (authtoken) => {

 console.log("AUTHTOKEN FROM GETACCOUNT STATUS",authtoken);
 const res= await axios.post("http://localhost:5000/api/get-account-status",{},
    {headers: {authtoken}});
 console.log("RES from get account status",res);
 return res;
}


import axios from "axios";

export const createConnectAccount= async (authtoken) => {
    return await axios.post("http://localhost:5000/api/create-connect-account", {},
      {headers: {authtoken}});    
}

export const getAccountStatus= async (authtoken) => {
  return await axios.post("http://localhost:5000/api/get-account-status",{},
    {headers: {authtoken}});
}

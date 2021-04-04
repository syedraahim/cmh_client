import axios from "axios";
export const addArea =  async ( authtoken) =>  {
    const res = await axios.get("http://localhost:5000/api/areas",
    {headers: {authtoken}});   
    // history.push("/admin/categories/arealist");
  };

  export const fetchAreas =  async () =>  {
    return await axios.get("http://localhost:5000/api/areas/list");     
   };

import React from "react";
import {Link} from "react-router-dom";

const CategoryQuestions = () =>
{
   return (
    <div>
      <Link to= "/admin" className= "d-flex justify-content-center admin-class">Admin</Link>
      Category Questions
    </div>
   )
}

export default CategoryQuestions;

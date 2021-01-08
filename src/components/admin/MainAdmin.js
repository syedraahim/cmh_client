import React from "react";
import {Link} from "react-router-dom";
const MainAdmin = () =>
{
  return(
    <div className= "container">
      <div className= "row mt-3 mb-2 admin-class d-flex text-center justify-content-center" >
          <Link to= "/admin/categories/categoriesList">Categories</Link>
       </div>
      <div className= "row mt-3 mb-2 admin-class d-flex text-center justify-content-center">
          <Link to= "/admin/subcategories/subcategorieslist">Sub Categories</Link>
        </div>
        <div className= "row mt-3 mb-2 admin-class d-flex text-center justify-content-center">
          <Link to= "/admin/questions/questionslist">Questions</Link>
        </div>
        <div className= "row mt-3 mb-2 admin-class d-flex text-center justify-content-center">
          <Link to= "/admin/categoryquestions">Subcategory Questions</Link>
        </div>
        <div className= "row mt-3 mb-2 admin-class d-flex text-center justify-content-center">
          <Link to="/admin/vendor">Vendor Details</Link>
        </div>
        <div className= "row mt-3 mb-2 admin-class d-flex text-center justify-content-center">
          <Link to="/admin/vendorcategories">Vendor Categories</Link>
        </div>

    </div>
  )
}

export default MainAdmin;

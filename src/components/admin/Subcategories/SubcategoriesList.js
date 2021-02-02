import React from "react";
import {connect } from "react-redux";
import { Link} from "react-router-dom";
import {fetchCategoriesName} from "../../../actions/category";
import {fetchSubcategories} from "../../../actions/subcategory";
import AdminMenu from "../AdminMenu";


class SubcategoriesList extends React.Component {

 componentDidMount() {
     this.props.fetchSubcategories(); 
     this.props.fetchCategoriesName();    
 }   

 addRoute() {
    return("/admin/subcategories/subcategoriescreate");
 }

 renderList() {

    if (!this.props.subcategories) {
      <p>Loading....</p>
    }
    console.log("From this.props.renderlist", this.props); 
    return (
      
       this.props.subcategories &&  this.props.subcategories.map( subcategory => {

        { if (subcategory._id)  
            return (

                <div className= "row" key= {subcategory._id}>
                  
                 <div className= "col col-md-4 category">                  
                     {subcategory.category.name}
                 </div>
                  <div className= "col col-md-4 text-align-right category">
                      {subcategory.name}
                  </div>
                  
                  <div className= "col-md-4 mb-1">
                      <Link to= {`/admin/subcategories/subcategoriesedit/${subcategory._id}`} className= "btn btn-primary  mr-1 primary-button">Edit</Link>
                      <Link to= { `/admin/subcategories/subcategoriesdelete/${subcategory._id}`} className= "btn btn-danger mr-1 primary-button">Delete</Link>    
                   </div>
                 </div>
                 )
        }       
        })    
    )
 }


render() {

  return(
    <div>
      <AdminMenu 
          addRoute = {this.addRoute()}
       />
        <h1>Sub Categories</h1> 
        <div className= "container category-center"> 
        <div className= "row mt-2">
        <div className = "col col-md-4 mb-3 mt-2 category">
            <h5 className= "font-weight-bold"> Category </h5>
        </div>
         <div className = "col col-md-4 mb-3 mt-2 category">
             <h5 className= "font-weight-bold">  Sub Category </h5>
       </div>
       </div> 
       <form>
         {this.renderList()}
       </form>
      </div>
    </div>

  )  
}

}

const mapStateToProps = (state) => {
   console.log("From mapstate in subcategory list",state);
   return  {subcategories: Object.values(state.subcategories),
            categoryName: Object.values(state.categories) }
   
}

export default connect(mapStateToProps, {fetchCategoriesName,fetchSubcategories})(SubcategoriesList);
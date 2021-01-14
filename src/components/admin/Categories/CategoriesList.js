import React from "react";
import { connect} from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../../actions";
import AdminMenu from "../AdminMenu";

class CategoriesList extends React.Component
{

    
componentDidMount() {
    this.props.fetchCategories();
}

addRoute() {
  return("/admin/categories/categoriescreate");
 }

renderList() {
    return (this.props.categories.map( category =>
    {
     
      {if(category.name)
        return (                   
          <div className= "row"  key= {category._id}>            
              <div className= "col col-md-4 mb-2  category" >
              {category.name}
              </div>
              <div className= "col col-md-4 mb-2 category">
              {category.imgURL}
              </div>
              <div className= "col-md-4 mb-1">
              <Link to= {`/admin/categories/categoriesedit/${category._id}`} className= "btn btn-primary  mr-1 primary-button">Edit</Link>
              <Link to= {`/admin/categories/categoriesdelete/${category._id}`} className= "btn btn-danger mr-1 primary-button">Delete</Link>
              </div>
            </div>  
                   
        )
      }
  
    })
      )
}
render() {
   
 return (
     <div >
       <AdminMenu
         addRoute= {this.addRoute()}
       />
        <h2 className= "card-header font-weight-bold">Categories</h2>
       <div className= "container category-center"> 
        <div className= "row mt-2">
        <div className = "col col-md-4 mb-3 mt-2 category">
            <h5 className= "font-weight-bold"> Category Name</h5>
        </div>
         <div className = "col col-md-4 mb-3 mt-2 category">
             <h5 className= "font-weight-bold">  Image URL</h5>
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
 return { categories: Object.values(state.categories)};
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesList);

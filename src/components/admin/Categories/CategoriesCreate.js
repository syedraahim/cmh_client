import React, {Component} from "react";
import { connect } from "react-redux";
import { addCategory} from "../../../actions/category";
import CategoriesForm from "./CategoriesForm";
import AdminMenu from "../AdminMenu";

class CategoriesCreate extends Component
{

   addRoute() {
    return("/admin/categories/categoriescreate");
   } 

   onSubmit= formValues => {
            console.log("formvalues from category create", formValues);
            this.props.addCategory(formValues);
   }
    
  render() {  
   return(
   <div>
    <AdminMenu 
     addRoute= {this.addRoute()} />     
    <h1 className="card-header font-weight-bold" > Add New Categories </h1>   
    <CategoriesForm onSubmit= {this.onSubmit} />
   </div>   
  );
}
}

function mapStateToProps(state) {
    return { formValues: state.form.categoryForm};
}

export default connect(mapStateToProps, {addCategory})(CategoriesCreate);


import React from "react";
import { Field, reduxForm } from "redux-form";
import {connect} from "react-redux";
import AdminMenu from "../AdminMenu";
import { addSubcategory } from "../../../actions";
import SubcategoriesForm from "./SubcategoriesForm";

class SubcategoriesCreate extends React.Component {  

    
   addRoute() {
     return("/admin/subcategories/subcategoriescreate");
   }

   onSubmit = (formValues) => {
       this.props.addSubcategory(formValues);
   }

     
    render() {  
          return (
              
            <div>             
             <AdminMenu 
               addRoute = {this.addRoute()}
             />
             <h1 className= "font-weight-bold card-header "> Add New Subcategory</h1>             
             <SubcategoriesForm
               onSubmit = {this.onSubmit}
              /> 
             </div>                         
            ); 
      }      
    }

const mapStateToProps = (state) => {
      return ( { formValues: state.form.subcategoriesForm }
     );
 }


export default connect(mapStateToProps,{ addSubcategory })(SubcategoriesCreate);
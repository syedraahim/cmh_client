//form to display the jsx for create and edit subcategory form

import React from "react";
import { Field, reduxForm } from "redux-form";
import VendorField from "../../vendor/VendorField";
import {connect} from "react-redux";
import { fetchCategoriesName } from "../../../actions";

class SubcategoriesForm extends React.Component {

  componentDidMount() {
    this.props.fetchCategoriesName();
  }

    renderError(touched, error) {
      if (touched && error) {
        return (
        <div className= "alert alter-danger mt-2">
          <div className= "header">{error} </div>             
        </div>
        )}   
    }

    renderFields() {
      
      return(
      <div>
      <div className= "form-group">
        <label htmlFor="category" className= "font-weight-bold">Select a Category</label>
        <Field
          name= "category"          
          className= "form-control"
          component= "select" 
         >
          <option value= "">Select a category</option>   
          console.log("Props from subcategoryForm",this.props);
          {this.props.categoryName.length && this.props.categoryName[0].map(categoryval => {
          
           return <option key= {categoryval.name} value= {categoryval.name}> { categoryval.name} </option> 
          }) 
          }                           
         </Field>
         </div> 

          <Field
          label= "Subcategory"
          type= "text"
          name= "name"
          placeholder= "Enter a subcategory"
          component= {VendorField} >
          </Field>            
      </div>
      );
   }
   
   onSubmit = (formValues) => {
      this.props.onSubmit(formValues);
   }

    render() {       
            return (
             <div>
            
            <div className= "container">
             <div className= "card mt-2 mb-2" >
              <div className= "card-body">
              <form onSubmit = { this.props.handleSubmit(this.onSubmit)}>
                <div className= "row" >
                   <div className= "col">
                     {this.renderFields()}   
                  </div>
                </div>
                <div className= "d-flex justify-content-center mt-2 ">
                  <button type="submit" className= "btn btn-primary font-weight-bold primary-button">Submit</button>
                </div>
              </form>
              </div>
             </div>
             </div>
            </div>
            );
        
    }
}

function validate(values) {

    const errors = {};
    if(!values.category) {
       errors.category= "Please select a category";
    }
    if (!values.subcategory) {
        errors.subcategory = "Please enter a subcategory";
    }
}

const mapStateToProps = (state) => {
  console.log("state from map state subcategories form:",state);
  return ( { categoryName: Object.values(state.util)}          
  );
}

const formWrapped = reduxForm( {
    form: "subcategoriesForm",
    validate: validate 
})(SubcategoriesForm);

export default connect(mapStateToProps, {fetchCategoriesName})(formWrapped);
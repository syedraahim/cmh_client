import React from "react";
import { Field, reduxForm } from "redux-form";
import VendorField from "../../vendor/VendorField";
import SubcategoriesMenu from "./SubcategoriesMenu";

class SubcategoriesCreate extends React.Component {

    renderError(touched, error) {
      if (touched && error) {
        return (
        <div className= "alert alter-danger mt-2">
          <div className= "header">{error} </div>             
        </div>
        )}   
    }

    renderFields() {
      <div>
          <Field
            label= "Category"
            name= "category"
            component= "select"
          />
           <Field
            label= "Subcategory"
            type= "text"
            name= "subcategory"
            placeholder= "Enter a subcategory"
            component= {VendorField}
          />
        </div>
     }

    render() {       
            return (
             <div>
             <SubcategoriesMenu />
             <h1 className= "font-weight-bold card-header "> Add New Subcategory</h1> 
             <div className= "container">
             <div className= "card mt-2 mb-2" >
              <div className= "card-body">
              <form>
                <div className= "row" >
                   <div className= "col">
                     {this.renderFields()}   
                  </div>
                </div>
                <div className= "d-flex justify-content-center mt-2 ">
                  <button type="submit" className= "btn btn-primary font-weight-bold primary-button">Add</button>
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

    if (!values.subcategories) {
        values.errors = "Please enter a subcategory";
    }
}

export default reduxForm({ form: "subCategoriesCreate",
                           validate })(SubcategoriesCreate);
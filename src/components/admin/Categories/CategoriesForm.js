import React, {Component} from "react";
import {reduxForm,Field, FieldArray} from "redux-form";
import VendorField from "../../vendor/VendorField";

class CategoriesForm extends Component
{

renderError({touched, error}) {

      if( touched && error)  {
       return(
        <div className= "alert alert-danger mt-2">
          <div className= "header">{error}</div>
       </div>
       ) }
 }


 renderFields() {
    return(
     <div>
        <Field label= "Category"
               component = {VendorField}
               type = "text"
               name= "name"
               placeholder= "Enter Category"             
          />
          <Field label= "Image Link"
                 component= {VendorField}
                 type= "text"
                 name= "imgURL"
                 Placeholder= "Enter Image Link"               
          />
     </div>
    ) }
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    
  render() {  
   return(
   <div>   
   <section className= "vendor-center">   
   <div className = "card mt-2 mb-2" >
   <div className= " card-body mb-1 " >   
    <form onSubmit= {this.props.handleSubmit(this.onSubmit)}>
       <div className= "row">
        <div className= "col">
         {this.renderFields()}
        </div>
       </div>
        <div className= "d-flex justify-content-center mt-2  ">
         <button type="submit" className = "btn btn-primary font-weight-bold " name="category">Submit</button>  
         </div>     
     </form>
    </div>  
    </div>
    </section>
    </div>   
  );
}
}

function validate(values) 
{
   console.log("values error not showing:",values);
   const errors = {};

   if (!values.name) {
      errors.name = "Please enter the category";
   }
   if (!values.imgURL) {
      errors.imgURL = "Please enter the image link";
   }
  
}

export default  reduxForm({
    form: "categoriesForm",
    validate
 })(CategoriesForm);


import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {Link} from "react-router-dom";
import VendorField from "./VendorField";
import validateEmail from "../../utils/validateEmail";


class VendorForm extends Component {
    renderFields() {
        return(
          <div>
            <Field label= "First Name" 
                  type= "text" 
                   name="firstname" 
                   component= {VendorField}/> 
        
           <Field label= "Last Name" 
               type= "text" 
                   name="lastname" 
                   component= {VendorField}/> 

          <Field label= "Email" 
                   type= "text" 
                   name="email" 
                  component= {VendorField}/> 
        
            <Field label= "Postcode" 
                   type= "text" 
                   name="postcode" 
                  component= {VendorField}/> 
        
            <Field label= "House No" 
                   type= "text" 
                   name="houseno" 
                   component= {VendorField}/> 
           
            <Field label= "Address Line 1" 
                   type= "text" 
                   name="addressline1"                    
                   component= {VendorField}/> 
        
             <Field label= "Address Line 2" 
                  type= "text" 
                   name="addressline2" 
                   component= {VendorField}/> 

            <Field label= "City" 
                   type= "text" 
                  name="city" 
                  component= {VendorField}/> 
            <Field label= "County" 
                   type= "text" 
                   name="county" 
                   component= {VendorField}/> 
            <Field label= "Country" 
                   type= "text" 
                   name="country" 
                   component= {VendorField}/> 
           
      </div> 
        ) }       
        
    
    render() {
        return(   
            <div>        
              <h1 className="h4 font-weight-bold card-header">Create your account</h1>
                
             <section className= "vendor-center">
             <div className="card">
             <div className="card-body">
             <form onSubmit= {this.props.handleSubmit(this.props.onVendorSubmit)}>
               {this.renderFields()}
               <div className= "row">
               <div className= "col pull-left mt-1">
               <Link to = "/" className= "btn btn-md btn-danger font-weight-bold ">Cancel</Link>
               </div>
               <div className= "col-pull-right mt-1 mr-3">
               <button type="submit" className= "btn btn-md btn-primary font-weight-bold ">Next</button>
               </div>
               </div>
            </form> 
             </div> 
            </div>
            </section>
            </div>        
        )
    }
}

function validate(values)
{
  const errors = {};

  if (!values.firstname) {
      errors.firstname = "Please enter the First Name";
  }

  if (!values.lastname) {
    errors.lastname = "Please enter the Last Name";
}

if (!values.email) {
    errors.email = "Please enter the email address";
} else  {
   const emailOutput = validateEmail(values.email);
   errors.email = (emailOutput ? "" : "Please enter a valid email") ;
}

if (!values.postcode) {
    errors.postcode = "Please enter the Postcode";
}

if (!values.houseno) {
    errors.houseno = "Please enter the House No";
}

if (!values.addressLine1) {
    errors.addressLine1= "Please enter the Address";
}
if (!values.city) {
    errors.city = "Please enter the City";
}

  return errors;
}

 export default reduxForm( {
           validate: validate,
           form: "vendorForm",
           destroyOnUnmount: false
 })(VendorForm);

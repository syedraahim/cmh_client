import React, {Component} from "react";
import {reduxForm, Field, FieldArray} from "redux-form";
import VendorField from "../../vendor/VendorField";


class QuestionsForm extends Component {

renderError = ({touched, error}) => {
  if (touched && error) {
     return (
        <div className= "alert alert-danger mt-2">
           <div className= "header">{error} </div>
        </div>
     ); 
  }
}

renderOptions = ({fields}) => (
    
    <ul className= "list-items"> 
      <li>
           <button className= " btn btn-primary mt-3 mb-2" type="button" onClick= {() => fields.push()}>
             Add Option 
           </button>         
      </li>
        { fields.map( (option, index) => (     
        <li key= {index}>                                 
         
         <button className="btn btn-danger float-right fa fa-trash-o  delete-button" type="button"
                      title= "Remove option"
                      onClick = {() => fields.remove(index)} > 
          </button> 
         <div className= "row form-group"> 
           <div className= "col col-md-12 mt-0">
                 <Field
                   name= {option} 
                   type= "text"
                   component= {VendorField}
                   label= {`Option # ${index + 1}`}
                 />   
          </div> 
         </div> 
         </li>                 
        )) }
     </ul>
      );

 renderFields() {
   
   return(
          <Field 
               label= "Question"
               type= "text"
               name= "question" 
               component= {VendorField} 
               placeholder = "Please enter a question"             
          />         
    ) 
  }

  onSubmit= (formValues) => {
          this.props.onSubmit(formValues);
    }

   
  render ()  {
       return (             
        <div>        
         <section className= "vendor-center mb-2">
       
         <div className= "card">
         <div className= "card-body">               
           <form onSubmit=  {this.props.handleSubmit(this.onSubmit)}>
            {console.log("props from questionsform level 2:", this.props)}
              {this.renderFields()} 
             <FieldArray
                name= "options"        
                component=  {this.renderOptions}
              />                

            <div className= "d-flex justify-content-center mt-1" >
              <button type="submit"  className= "btn btn-primary font-weight-bold" >Submit</button>
            </div> 
            </form>             
         </div>
         </div>                        
          
        
        </section>
        </div>
    )
  }
}  

const validate = (formValues) => {

   const errors = {}

   if (!formValues.question) {
      errors.question = "Please enter the question";
   }
   if (!formValues.option) {
     errors.option = "Please enter a valid option"
   }
  return errors;
}

export default reduxForm( {form: "questionsForm",
                          validate})(QuestionsForm);

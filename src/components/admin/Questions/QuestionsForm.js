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
         
         <button className="btn btn-danger btn-lg float-right delete-button mt-2 ml-0" type="button"
                      title= "Remove option"
                      onClick = {() => fields.remove(index)} > X
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
          />         
    ) }

  onSubmit= (formValues) => {
        console.log("Form values from Questions form:",formValues);
        this.props.onSubmit(formValues);
    }

   
  render ()  {
        console.log("props from questionsform:", this.props);
        return (             
        <div>        
         <section className= "vendor-center">
         <h1 className= "card-header">Questions Master</h1>  
         <div className= "card">
         <div className= "card-body">               
           <form onSubmit= {this.props.handleSubmit(this.onSubmit)}>
              {this.renderFields()} 
              <FieldArray
                name= "options"        
                component=  {this.renderOptions}
                />                
            </form>             
         </div>
         </div>                        
          <div className= "d-flex justify-content-center mt-1" >
              <button type="submit" className= "btn btn-primary font-weight-bold" name= "question">Submit</button>
          </div> 
        
        </section>
        </div>
    )
  }
}  

export default reduxForm( {form: "questionsForm"})(QuestionsForm);

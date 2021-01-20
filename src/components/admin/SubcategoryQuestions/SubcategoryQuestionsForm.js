import React, {Component} from "react";
import {reduxForm ,Field, FieldArray} from "redux-form";
import {connect } from "react-redux";
import {fetchCategoriesName, fetchSubcategoriesName, fetchQuestionsName} from "../../../actions";
import VendorField from "../../vendor/VendorField";

class SubcategoryQuestionsForm extends Component {

  componentDidMount() {
    console.log("this.props from subcat questions form", this.props);
    this.props.fetchCategoriesName();
    this.props.fetchSubcategoriesName();
    this.props.fetchQuestionsName();
  }

  

  renderError(touched, error) {
    if (touched && error) {
      return (
      <div className= "alert alter-danger mt-2">
        <div className= "header">{error} </div>             
      </div>
      )}   
  }

  onSubmit = (formValues) => {
    console.log("Props from on Submit SCQ FORM", this.props);
    this.props.onSubmit(formValues);
 }


    renderFields() {
      if (!this.props.utilValues[0] || !this.props.utilValues[1])  {        
        return (
           <div>Loading Categories and Subcategories....</div>
      )} 
       
      return(
        <div>
          <div className= "form-group" >
          <label className= "font-weight-bold mt-2">Select a Category </label>
          <Field 
           name= "category"
           className= "form-control"
           component= "select"   
          //  onChange= {(state,val, prevVal) => console.log(state,val, prevVal)} 
           >   
          <option value="">Select a Category</option>
          
          {  console.log("UtilValues from subcat question XXX", this.props) }
          { this.props.utilValues[0] && this.props.utilValues[0].map( categoryVal => {
               return( <option key={categoryVal.name} value= {categoryVal.name}>{categoryVal.name}</option>) }
          )}  

          </Field> 
          <div>
            <label className= "font-weight-bold mt-2"> Select a Sub Category</label>
          <Field 
           name= "subcategory"
           className= "form-control"
           component= "select"
          >
          <option value="">Select a Sub Category</option>
           
            { this.props.utilValues[1] && this.props.utilValues[1].map( subcatVal => {
             return( <option key={subcatVal.name} value= {subcatVal.name}>{subcatVal.name}</option>)
             }) 
            }             
          </Field>
          </div>         
        </div>
        </div>
      )
    }
     
     renderSubcategory = () => {
      if (!this.props.utilValues[1])  {        
        return (
           <div>Loading Sub Categories....</div>
        )} ; 
       return(
         <div>
            <label className= "font-weight-bold mt-2"> Select a Sub Category</label>
          <Field 
           name= "subcategory"
           className= "form-control"
           component= "select"
          >
          <option value="">Select a Sub Category</option>
           
            { this.props.utilValues[1].length && this.props.utilValues[1].map( subcatVal => {
             return( <option key={subcatVal.name} value= {subcatVal.name}>{subcatVal.name}</option>)
             }) 
            }            
          </Field>
           
         </div>
       )
     }
      renderQuestions = ({fields}) => (          
       
       <ul className= "list-items">
        <li>
          <button type= "button" className= "btn btn-primary font-weight-bold mb-2"
                  onClick = { () => fields.push()}
          >Add Questions</button>
        </li>
        {fields.map( (question,index) => (
        <li key= {index} >
        <button className="btn btn-danger float-right fa fa-trash-o question-delete"
          type="button"
          title="Remove Question"
          onClick={() => fields.remove(index)}
         />
       <div className= "row form-group"> 
        <div className= "col col-md-12 mt-0">
        <Field
          name={question}
          type="text"
          component="select"
          className="form-control"
          label={`question #${index + 1}`}
        >
         <option value="">Select a Question</option>
          {this.props.utilValues[2].length && this.props.utilValues[2].map( questionVal => {
           return( <option key={questionVal.question} value= {questionVal.question}>{questionVal.question}</option>)
         })
         } 
         
        </Field>
       </div>
       </div>
      </li>        
        ) )}
       </ul>
          
       )       
       
      

    render() {
        
        return(
            <div>
                <section className= "question-center mb-2">
                    <div className= "card" >
                    <div className= "card-body">
                    <form onSubmit = { this.props.handleSubmit(this.onSubmit)} >
                        {this.renderFields()}
                        <FieldArray
                           name= "questions"        
                           component=  {this.renderQuestions}
                         />    
                     <div className= "d-flex justify-content-center mt-2" >         
                       <button type= "Submit" className= "btn btn-primary font-weight-bold"> Submit</button>
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

    const errors= {}

    if (!formValues.category) {
        errors.category= "Please select a valid category";
    }
    if (!formValues.subcategory) {
        errors.subcategory= "Please select a valid subcategory";
    }
    if (!formValues.questions) {
        errors.questions= "Please select atleast 1 valid question";
    }
}

const mapStateToProps = (state) => {
  console.log("state from mapstate in subcat ques YYY",state.util);
  if (state.util === null) {
    return (null);
  } else {
  return  { 
            utilValues: Object.values(state.util)
          //  ,subcatValues: Object.values(state.util.subcategoryName)
          //  ,questionValues: Object.values(state.util.questionName)
          } 
         }  }

const formWrapped = reduxForm(
                     {form: "subcatQuestionsForm",
                      validate })
                     (SubcategoryQuestionsForm);

export default connect( mapStateToProps, {fetchCategoriesName, fetchSubcategoriesName, fetchQuestionsName})
                      (formWrapped);


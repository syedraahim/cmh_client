import React, {Component} from "react";
import {reduxForm ,Field, FieldArray} from "redux-form";
import VendorField from "../../vendor/VendorField";

class SubcategoryQuestionsCreate extends Component {

    renderFields() {
      return(
        <div>
          <div className= "form-group" >
          <label className= "font-weight-bold">Select a Category </label>
          <Field 
           name= "category"
           className= "form-control"
           component= "select"        
          />
          <label className= "font-weight-bold"> Select a Sub Category</label>
          <Field 
           name= "subcategory"
           className= "form-control"
           component= "select"
          />
         
        </div>
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
        <button className="btn btn-danger float-right fa fa-trash-o delete-button"
          type="button"
          title="Remove Question"
          onClick={() => fields.remove(index)}
         />
       <div className= "row form-group"> 
        <div className= "col col-md-12 mt-0">
        <Field
          name={question}
          type="text"
          component={VendorField}
          label={`question #${index + 1}`}
        />
       </div>
       </div>
      </li>        
        ) )}
       </ul>
          
       )       
       
    

    render() {

        
        return(
            <div>
                <h1 className= "card-header mb-2">Add Subcategory Questions</h1>
                <section className= "question-center mb-2">
                    <div className= "card" >
                    <div className= "card-body">
                    <form>
                        {this.renderFields()}
                        <FieldArray
                           name= "questions"        
                           component=  {this.renderQuestions}
                         />    
                     <div className= "d-flex justify-content-center mt-2" >         
                       <button type= "Submit" className= "btn btn-primary primary-button font-weight-bold"> Submit</button>
                     </div>   
                    </form> 
                    </div>
                      
                    </div>
                   
                    
                </section>
            </div>
        )
    }

}

export default reduxForm(
                      {form: "SubcatQuestionCreate" })
                      (SubcategoryQuestionsCreate);


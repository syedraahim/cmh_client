import React from "react";
import {connect} from "react-redux";
// import { toast} from "react-toastify";
import AdminMenu from "../AdminMenu";
import QuestionsForm from "./QuestionsForm";
import { addQuestion } from "../../../actions";


class QuestionsCreate extends React.Component {

addRoute() {
    return("/admin/questions/questionscreate");
}

onSubmit = (formValues) => {
        this.props.addQuestion(formValues);
        //   .then( (res) => 
        //   {
        //     toast.success("Category is created successfully!!!!");
        //   })
        //   .catch(err => {
        //     toast.error("Category creation failed !!!!!");
        //   }            
        //  )
       }

  render ()  {      
      return (             
        <div>
        <AdminMenu
          addRoute= {this.addRoute}
         /> 
           <h1 className="category-head font-weight-bold card-header">Add Questions </h1>          
          <QuestionsForm
             onSubmit = {this.onSubmit}
           />        
        </div>
    )
  }
}  

function mapStateToProps(state) {
    return { formValues: state.form.questionsForm}
}

export default connect(mapStateToProps,{addQuestion})(QuestionsCreate);

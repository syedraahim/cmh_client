import React, {Component} from "react";
import {connect} from "react-redux";
import AdminMenu from "../AdminMenu";
import QuestionsForm from "./QuestionsForm";
import {addQuestion } from "../../../actions";


class QuestionsCreate extends Component {

addRoute() {
    return("/admin/questions/questionscreate");
}


onSubmit = (formValues) => {
        console.log("in submit form",formValues);
        this.props.addQuestion(formValues);
    }

  render ()  {      
      return (             
        <div>
        <AdminMenu
          addRoute= {this.addRoute}
         />         
         <h1 className= "category-head font-weight-bold card-header">Questions Master</h1>  
         <QuestionsForm
             onSubmit = {this.onSubmit()}
           />        
        </div>
    )
  }
}  

function mapStateToProps(state) {
    return { formValues: state.form.questionForm}
}

export default connect(mapStateToProps,{addQuestion})(QuestionsCreate);

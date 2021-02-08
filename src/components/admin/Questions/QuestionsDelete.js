import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { fetchQuestion, deleteQuestion } from "../../../actions/questions";
import AdminMenu from "../AdminMenu";
import Modal from "../../Modal";
import history from "../../../history";

class QuestionsDelete extends Component {

componentDidMount() {
    console.log("From question delete", this.props.match.params.id);
    this.props.fetchQuestion(this.props.match.params.id);
}

 addRoute() {
        return("/admin/questions/questionscreate");
 }

 renderActions() {
    return (
       <React.Fragment>
       <button onClick= { () => this.props.deleteQuestion(this.props.match.params.id)} type="submit" className=" btn btn-danger primary-button mr-3">Yes</button>
       <Link to= "/admin/questions/questionsList" type="button" className= "btn btn-secondary primary-button">No</Link>
       </React.Fragment>
       );
  }


 renderContent() {
    if(!this.props.question) {
       return ("Are you sure you want to delete this question?");
    }
       return(`Are you sure you want to delete the question: ${this.props.question.question}`);
 }    



render() {
   return(
    <div>
    <AdminMenu 
    addRoute = {this.addRoute()}
    />
  
    <Modal 
      title= "Delete a Question"
      content= {this.renderContent()}
      actions= {this.renderActions()}
      onDismiss = {() => history.push("/admin/categories/categorieslist") }
    />
    </div>
   ) 
    
}

}

const mapStateToProps= (state,ownProps) => {
    console.log(state);
    return {question: state.questions[ownProps.match.params.id]};
}


export default connect(mapStateToProps, { fetchQuestion, deleteQuestion})(QuestionsDelete);
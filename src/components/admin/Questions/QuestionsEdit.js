import _ from "lodash";
import React, {Component} from "react";
import { connect} from "react-redux";
import { editQuestion, fetchQuestion} from "../../../actions";
import AdminMenu from "../AdminMenu";
import QuestionsForm from "./QuestionsForm";

class QuestionsEdit extends Component {

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.id);
    }

    addRoute() {
        return("/admin/questions/questionscreate");
       } 

    onSubmit = (formValues) => {
        this.props.editQuestion(this.props.match.params.id,formValues);
    }

    render() {
        if (!this.props.questions)  {
            return (
               <div>Loading....</div>
            )} ;  
        return(
        <div>
           <AdminMenu 
             addRoute= {this.addRoute()}
           />
           <h1>Edit Question</h1>

       <QuestionsForm  
        initialValues =  { _.pick(this.props.questions, "question", "options")}
        onSubmit= {this.onSubmit}             
        />          
       </div>        
       )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { questions: state.questions[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {editQuestion, fetchQuestion}) (QuestionsEdit);
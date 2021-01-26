import React, {Component, Fragment} from "react";
import AdminMenu from "../AdminMenu";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {fetchQuestions} from "../../../actions";
import categoryReducer from "../../../reducers/categoryReducer";

class QuestionsList extends Component
{

    componentDidMount() {
        this.props.fetchQuestions();
    }

    addRoute() {
        return("/admin/questions/questionscreate");
       }

    renderList() {
        return (         
         this.props.questions && this.props.questions.map( questionVal => {
        
        return(            
           
            <div className= "row mb-1">                    
            <div className= "col col-md-6 question" >
             <p key= {questionVal._id}>  {questionVal.question}</p>  
            </div>
            <div className= "col col-md-3 question" > 
              {questionVal.options && questionVal.options.map( optionVal => {
                 return(                              
                  <p key= {optionVal} >{optionVal}</p>             
                 )
             }) 
             }                 
             </div>   
             <div className= " col col-md-3 float-right mb-1">
                      <Link to= {`/admin/questions/questionsedit/${questionVal._id}`} className= "btn btn-primary  mr-1 primary-button">Edit</Link>
                      <Link to= { `/admin/questions/questionsdelete/${questionVal._id}`} className= "btn btn-danger mr-1 primary-button">Delete</Link>    
             </div> 
                </div> 
                    
        )         
        })        
       ) 
    }
    
    render() {
    return (
     <div>        
       <h1 className= "font-weight-bold"> Questions </h1>  
           <AdminMenu
            addRoute = {this.addRoute()}
           />
       <div className= "container mt-2" > 
       <div className = "row p-3 bg-light ">
          <div className= "col col-md-6 ">
            <h5 className= "font-weight-bold text-left"> Question</h5>           
          </div>
           <div className= "col col-md-3">
            <h5 className= "font-weight-bold text-left"> Options</h5>             
            </div>
         </div>
        <div className= "card">        
          <form>
             {this.renderList()}
          </form>          
       </div> 
       </div>
     </div> 
    )}
}

const mapStateToProps = (state) => {    
        return { questions: Object.values(state.questions)};       
}

export default connect(mapStateToProps, {fetchQuestions})(QuestionsList);
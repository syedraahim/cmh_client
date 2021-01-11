import React, {Component} from "react";
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
           <div className= "card-body question"  key= {questionVal._id}>            
            <div className= "text-left question" >
               {questionVal.question}
            </div>
            <div className= "text-right question mr-2" > 
             {questionVal.options && questionVal.options.map( optionVal => 
             {
              return(                             
                 <p key= {optionVal} >{optionVal}</p>             
              )
             })
            }
             </div> 
             <div className= "mb-1">
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
        
       <h1> Questions </h1>  
           <AdminMenu
            addRoute = {this.addRoute()}
           />
       <div className= "container" > 
       <div className = "row p-3 bg-light ">
          <div className= "col col-md-6 ">
            <h5 className= "font-weight-bold text-left ml-2"> Question</h5>           
          </div>
           <div className= "col col-md-6">
            <h5 className= "font-weight-bold text-right mr-2"> Options</h5>             
            </div>
         </div>
        <div className= "card ">        
          <form>
             {this.renderList()}
          </form>          
       </div> 
       </div>
     </div>
     
        
    )
    }
}

const mapStateToProps = (state) => {    
        return { questions: Object.values(state.questions)};
       
}

export default connect(mapStateToProps, {fetchQuestions})(QuestionsList);
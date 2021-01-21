import React, {Component} from "react" ;
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import AdminMenu from "../AdminMenu";
import { fetchSubcatQuestions } from "../../../actions";

class SubcategoryQuestionList extends Component {

    componentDidMount() {
        console.log("Props from Subcat QUES",this.props);
        this.props.fetchSubcatQuestions();
    }

    addRoute() {
        return("/admin/subcatquestions/subcatquestionscreate");
       }

    renderList() {
      {console.log("props from scqqqqqqq", this.props.subcatquestions)}
        if (!this.props.subcatquestions) {
          <p>Loading....</p>
        }
        return (           
            this.props.subcatquestions && this.props.subcatquestions.map( subquestionval => {
            return (
                <div className= "row"  >
                  <div className= "col col-md-2 category text-left" >
                    <p key= {subquestionval.category._id}> {subquestionval.category.name}</p>
                  </div>
                   <div className= "col col-md-2 category text-left">                   
                     <p key= {subquestionval.subcategory._id}> {subquestionval.subcategory.name}</p> 
                  </div> 
                  <div className= "col col-md-4 category text-left">

                   {subquestionval.questions.map(questionval => {
                    return (                    
                    <div className= " category text-align-center" >                     
                        <p className= "font-weight-bold" key= {questionval. _id}>  {questionval.question}</p>  
                        
                        {questionval.options.map(optionval => {
                        return(
                       <div className= "options" >
                          <p key= {optionval}>   {optionval}</p>
                       </div>  
                        )}
                        )}                 
                    </div>                    
                    ) 
                  }
                  )}       

                  </div>  

                  <div className= "col-md-4 mb-1">
                      <Link to= {`/admin/subcatquestions/subcatquestionsedit/${subquestionval._id}`}  className= "btn btn-primary  mr-1 primary-button">Edit</Link>
                      <Link to= {`/admin/subcatquestions/subcatquestionsdelete/${subquestionval._id}`} className= "btn btn-danger mr-1 primary-button">Delete</Link>    
                   </div>      
                               
                 </div>
            )
            }) 
           )}             


    render() {
        return(
            <div>
               <AdminMenu 
                   addRoute= {this.addRoute}
               />             
               <h1 className="category-head font-weight-bold "> Subcategory Questions </h1>
               <div className= "container" > 
              <div className = "row p-3 bg-light ">
               <div className= "col col-md-2 ">
                 <h5 className= "font-weight-bold text-left"> Category</h5>           
               </div>
               <div className= "col col-md-2">
                <h5 className= "font-weight-bold text-left mr-2"> Sub Category</h5>             
               </div>
               <div className= "col col-md-4">
                <h5 className= "font-weight-bold text-align-left mr-2"> Questions/ Options</h5>             
               </div>
               
         </div>
               
          <form>
             {this.renderList()}            
          </form>          
       </div> 
      
     </div>
  ) }
}

const mapStateToProps = (state) => {  
    console.log("state from mapstate in subcat questions AAA",state); 
     return { subcatquestions: Object.values(state.subquestion)};   
}


export default connect(mapStateToProps, { fetchSubcatQuestions })(SubcategoryQuestionList);
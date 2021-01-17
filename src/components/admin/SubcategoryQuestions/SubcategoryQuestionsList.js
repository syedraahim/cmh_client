import React, {Component} from "react" ;
import {connect} from "react-redux";
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
        return (
            this.props.subcatquestions && this.props.subcatquestions.map( subcatquestionval => {
            return (
                <div className= "row" key= {subcatquestionval._id} >
                  <div className= "col col-md-2 category text-left" >
                    <p> {subcatquestionval.category.name}</p>
                  </div>
                  <div className= "col col-md-2 category text-left">                   
                     <p> {subcatquestionval.subcategory.name}</p> 
                  </div>
                  <div className= "col"  >
                  {subcatquestionval.questions.map(questionval => {
                    return (
                    <div key= {questionval._id}>
                    <div className= "col col-md-6 text-left">
                      <p> {questionval.question}</p>
                    </div>
                    
                     {questionval.options.map(optionval => {
                     return(
                       <div className= " col col-md-9 text-right question" key= {optionval.options}>
                        <p> {optionval}</p>
                       </div>                   
                     )
                    })}
                  </div>                                                 
                   )}
                  )}        
                </div>  

                <button  className= "btn btn-primary">Edit</button>  
                <button className= "btn btn-danger">Delete</button>                          
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
               <h1 className="category-head font-weight-bold "> List Subcategory Questions </h1>
               <div className= "container" > 
              <div className = "row p-3 bg-light ">
               <div className= "col col-md-2 ">
                 <h5 className= "font-weight-bold text-left"> Category</h5>           
               </div>
               <div className= "col col-md-2">
                <h5 className= "font-weight-bold text-left mr-2"> Sub Category</h5>             
               </div>
               <div className= "col col-md-4">
                <h5 className= "font-weight-bold text-left mr-2"> Questions</h5>             
               </div>
               <div className= "col col-md-4">
                <h5 className= "font-weight-bold  ml-2"> Options</h5>             
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
    console.log("state from mapstate in subcat questions",state); 
     return { subcatquestions: Object.values(state.subquestion)};   
}


export default connect(mapStateToProps, { fetchSubcatQuestions })(SubcategoryQuestionList);
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
                <div className= "card-body" key= {subcatquestionval._id} >
                  <div className= "text-left">
                    <p> {subcatquestionval.category}</p>
                    <p> {subcatquestionval.subcategory}</p>
                    {/* <p> {subcatquestionval.question}</p> */}
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
               <h1 className="category-head font-weight-bold card-header"> List Subcategory Questions </h1>
               <div className= "container" > 
              <div className = "row p-3 bg-light ">
               <div className= "col col-md-3 ">
                 <h5 className= "font-weight-bold text-left ml-2"> Category</h5>           
               </div>
               <div className= "col col-md-3">
                <h5 className= "font-weight-bold text-right mr-2"> Sub Category</h5>             
               </div>
               <div className= "col col-md-3">
                <h5 className= "font-weight-bold text-right mr-2"> Questions</h5>             
               </div>
               <div className= "col col-md-3">
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
  ) }
}

const mapStateToProps = (state) => {  
    console.log("state from mapstate in subcat questions",state); 
    // return { subcatquestions: Object.values(state.subcatquestions)};   
}


export default connect(mapStateToProps, { fetchSubcatQuestions })(SubcategoryQuestionList);
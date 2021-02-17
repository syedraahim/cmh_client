import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import AdminMenu from "../AdminMenu";
import SubcategoryQuestionsForm from "./SubcategoryQuestionsForm";
import { addSubcatQuestion } from "../../../actions/subcatquestions";


const SubcategoryQuestionsCreate = () => {

   const addRoute= () => {
        return("/admin/subcatquestions/subcatquestionscreate");
      }

    const  onSubmit = (formValues) => {
          console.log("From ONSUBMIT in subcat questions create",this.props);
          this.props.addSubcatQuestion(formValues);         
      }

  
        return (
            <div>
               <AdminMenu 
                addRoute= {this.addRoute()}
               />
               <h1 className="category-head font-weight-bold card-header"> Add New Subcategory Questions</h1> 
               <SubcategoryQuestionsForm 
                   onSubmit= {this.onSubmit}
               />
            </div>
        )
    }


const mapStateToProps = (state) => {
    console.log("State from MSP in subcat create",state.form.subcatQuestionsForm);
    return  { formValues: state.form.subcatQuestionsForm }   
}

export default connect(mapStateToProps, {addSubcatQuestion} )
                                (SubcategoryQuestionsCreate);



import React, {Component} from "react";
import {connect} from 'react-redux';
import AdminMenu from "../AdminMenu";

class SubcategoryQuestionsEdit extends Component {

    addRoute() {
        return("/admin/subcatquestions/subcatquestionscreate");
       }

    render() {

        return(
            <div>
               <AdminMenu
                 addRoute= {this.addRoute()}
               />
                
                <h1> Edit Subcategory Questions</h1>
            </div>
        )
    }
}

export default SubcategoryQuestionsEdit;
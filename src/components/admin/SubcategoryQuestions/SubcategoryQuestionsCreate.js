import React, {Component} from "react";
import SubcategoryQuestionsForm from "./SubcategoryQuestionsForm";

class SubcategoryQuestionsCreate extends Component {

    addRoute() {
        return("/admin/subcategories/subcategoriescreate");
      }

    render() {
        return (
            <div>
               <AdminMenu 
                addRoute= {this.addRoute()}
               />
               <h1 className="category-head font-weight-bold card-header"> Add New Subcategory Questions</h1> 
               <SubcategoryQuestionsForm />
            </div>
        )
    }
}

export default SubcategoryQuestionsCreate;



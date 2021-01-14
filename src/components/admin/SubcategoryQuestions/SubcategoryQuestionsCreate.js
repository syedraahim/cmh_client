import React, {Component} from "react";
import {connect} from "react-redux";
import AdminMenu from "../AdminMenu";
import SubcategoryQuestionsForm from "./SubcategoryQuestionsForm";
import { addSubcatQuestion} from "../../../actions";


class SubcategoryQuestionsCreate extends Component {

    addRoute() {
        return("/admin/subcategories/subcategoriescreate");
      }

      onSubmit(formValues) {
          this.props.addSubcatQuestion(formValues);         
      }

    render() {
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
}

const mapStateToProps = (state) => {
    return ( { formValues: state.form.subcatQuestionForm }
   );
}

export default connect(mapStateToProps, {addSubcatQuestion})(SubcategoryQuestionsCreate);



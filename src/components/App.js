import React, {Component} from "react";
import {Router, Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";

import Mainpage from "./Mainpage";
import MainAdmin from "./admin/MainAdmin";
import CategoriesCreate from "./admin/Categories/CategoriesCreate";
import CategoriesList from "./admin/Categories/CategoriesList";
import CategoriesEdit from "./admin/Categories/CategoriesEdit";
import CategoriesDelete from "./admin/Categories/CategoriesDelete";
import SubcategoriesCreate from "./admin/Subcategories/SubcategoriesCreate";
import SubcategoriesList from "./admin/Subcategories/SubcategoriesList";
import SubcategoriesDelete from "./admin/Subcategories/SubcategoriesDelete";
import SubcategoriesEdit from "./admin/Subcategories/SubcategoriesEdit";
import QuestionsCreate from "./admin/Questions/QuestionsCreate";
import QuestionsList from "./admin/Questions/QuestionsList";
import SubcategoryQuestions from "./admin/SubcategoryQuestions";
import Vendor from "./admin/Vendor";
import VendorNew from "./vendor/VendorNew";
import VendorCategories from "./admin/VendorCategories";
import Vendorsign from "./vendor/Vendorsign";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./login/Login";
import Register from "./login/Register";

class App extends Component {
  componentDidMount() {
     this.props.fetchUser();
  }
  render() {
     return (
     <div className="App">
     <Router history = {history}>
       <Header />
       <Switch>
        <Route path= "/login" exact component= {Login} />
        <Route path= "/register" exact component= {Register} />
       </Switch>
       <Route path= "/" exact component= {Mainpage} />
       <Route path= "/admin" exact component= {MainAdmin} />
       <Route path= "/admin/categories/categoriescreate" exact component= {CategoriesCreate} />
       <Route path= "/admin/categories/categorieslist" exact component= {CategoriesList} />
       <Route path= "/admin/categories/categoriesedit/:id" exact component= {CategoriesEdit} />
       <Route path= "/admin/categories/categoriesdelete/:id" component= {CategoriesDelete} />
       <Route path= "/admin/subcategories/subcategoriescreate" exact component= {SubcategoriesCreate} />
       <Route path= "/admin/subcategories/subcategorieslist" exact component= {SubcategoriesList} />
       <Route path= "/admin/subcategories/subcategoriesdelete/:id"   component= {SubcategoriesDelete} />
       <Route path= "/admin/subcategories/subcategoriesedit/:id"  component= {SubcategoriesEdit} />
       <Route path= "/admin/questions/questionscreate" exact component= {QuestionsCreate} />
       <Route path= "/admin/questions/questionslist"  component= {QuestionsList} /> 
       <Route path= "/admin/categoryquestions" exact component= {SubcategoryQuestions} />
       <Route path= "/admin/vendor" exact component= {Vendor} />
       <Route path= "/vendor/vendorlogin" exact component= {VendorNew} />
       <Route path= "/admin/vendorcategories" exact component= {VendorCategories} />
       <Footer />
     </Router>
    </div>
  );
}
}

export default connect(null,actions)(App);

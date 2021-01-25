import React, { useEffect} from "react";
import {Router, Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {auth} from "../firebase";
import {useDispatch} from 'react-redux';

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
import QuestionsEdit from "./admin/Questions/QuestionsEdit";
import QuestionsDelete from "./admin/Questions/QuestionsDelete";
import SubcategoryQuestionsCreate from "./admin/SubcategoryQuestions/SubcategoryQuestionsCreate";
import SubcategoryQuestionsEdit from "./admin/SubcategoryQuestions/SubcategoryQuestionsEdit";
import SubcategoryQuestionsDelete from "./admin/SubcategoryQuestions/SubcategoryQuestionsDelete";
import SubcategoryQuestionsList from "./admin/SubcategoryQuestions/SubcategoryQuestionsList";
import Vendor from "./admin/Vendor";
import VendorNew from "./vendor/VendorNew";
import VendorCategories from "./admin/VendorCategories";
import Vendorsign from "./vendor/Vendorsign";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./login/Login";
import Register from "./login/Register";
import RegisterComplete from "./login/RegisterComplete";
import ForgotPassword from "./login/ForgotPassword";
import { LOGGED_IN_USER } from "../actions/types";

const App = () => {

  const dispatch= useDispatch();

   useEffect(() => {
     const unsubscribe= auth.onAuthStateChanged( async (user) => 
     {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log('User', user);
        dispatch({
          type: LOGGED_IN_USER,
          payload: {
             email: user.email,
             token: idTokenResult.token
          }
        })
        history.push("/");
      }
    })
    // return () => this.props.unsubscribe();
  }, []) 
      
  return (
     <div className="App">
     <Router history = {history}>
       <Header />
       <ToastContainer />
       <Switch>
        <Route path= "/login" exact component= {Login} />
        <Route path= "/register" exact component= {Register} />
        <Route path= "/registercomplete" exact component= {RegisterComplete} />
        <Route path= "/forgot/password" exact component= {ForgotPassword} />
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
       <Route path= "/admin/questions/questionsedit/:id"  component= {QuestionsEdit} />
       <Route path= "/admin/questions/questionsdelete/:id" component= {QuestionsDelete} /> 
       <Route path= "/admin/subcatquestions/subcatquestionscreate"  component= {SubcategoryQuestionsCreate} />
       <Route path= "/admin/subcatquestions/subcatquestionsedit/:id" component= {SubcategoryQuestionsEdit} />
       <Route path= "/admin/subcatquestions/subcatquestionsdelete/:id"  component= {SubcategoryQuestionsDelete} />
       <Route path= "/admin/subcatquestions/subcatquestionslist" exact component= {SubcategoryQuestionsList} />
       <Route path= "/admin/vendor" exact component= {Vendor} />
       <Route path= "/vendor/vendorlogin" exact component= {VendorNew} />
       <Route path= "/admin/vendorcategories" exact component= {VendorCategories} />
       <Footer />
     </Router>
    </div>
  );
}


export default connect(null,actions)(App);

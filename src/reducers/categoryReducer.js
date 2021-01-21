import _ from 'lodash';
import {
       CREATE_CATEGORY,
       FETCH_CATEGORIES,
       FETCH_CATEGORIES_NAME,
       EDIT_CATEGORY,
       DELETE_CATEGORY } from "../actions/types";

export default (state = [], action) => {
    console.log("category reducer",state);
    switch (action.type) {
        case FETCH_CATEGORIES:            
           return {...state, ..._.mapKeys(action.payload, '_id')} ;          
        case FETCH_CATEGORIES_NAME :
            return {...state, categoryName:action.payload};  
        case EDIT_CATEGORY:
            return {...state, [action.payload.id] : action.payload} ;        
         case CREATE_CATEGORY:
           return {...state, [action.payload.id] : action.payload} ;        
         case DELETE_CATEGORY:
            return _.omit( state, action.payload) ;       
        default:
            return state;
    }
}
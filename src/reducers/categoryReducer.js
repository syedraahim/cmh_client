import _ from 'lodash';
import {
       CREATE_CATEGORY,
       FETCH_CATEGORIES,
       FETCH_CATEGORY,
       EDIT_CATEGORY,
       DELETE_CATEGORY } from "../actions/types";

export default (state = {}, action) => {
    
    switch (action.type) {
        case FETCH_CATEGORIES:            
              return {...state, ..._.mapKeys(action.payload, '_id' )};
        case EDIT_CATEGORY:
            return {...state, [action.payload.id] : action.payload};
        // case FETCH_CATEGORY:
        //     return { ...state, [action.payload._id] : action.payload};
         case CREATE_CATEGORY:
           return {...state, [action.payload.id] : action.payload};
        
         case DELETE_CATEGORY:
            return _.omit( state, action.payload);       
        default:
            return state;
    }
}
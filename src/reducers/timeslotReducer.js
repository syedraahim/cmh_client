import _ from "lodash";

let initialState= {
    timeslotsval: []
};

const timeslotReducer = ( state= initialState, action) => {
   switch(action.type) {
    case "SELECTED_TIMESLOT":
         let temp= state.timeslotsval;
         let unique=_.uniqWith(temp,_.isEqual); 
         unique.push(action.payload);
         let a= unique.filter(timeslot => timeslot.tsday === action.payload.tsday)  
         console.log("Value of A",a);
         return {
              ...state,
              timeslotsval: a           
         }   
    default:
        return state;
   }
}
export default timeslotReducer;



let initialState= {
    timeslotsval: []
};

const timeslotReducer = ( state= initialState, action) => {
   switch(action.type) {
    case "SELECTED_TIMESLOT":
         console.log(state.timeslotsval,action.payload)
         return {
              ...state,
              timeslotsval: [...state.timeslotsval,action.payload.timeslotsval]            
         }   
    default:
        return state;
   }
}
export default timeslotReducer;



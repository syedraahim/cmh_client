let initialState= {
    dayval: ""   
};

const dayReducer = ( state= initialState, action) => {
   switch(action.type) {
    case "SELECTED_DAY" :
        return {dayval: action.payload };       
     default:
        return state;
   }
}
export default dayReducer;
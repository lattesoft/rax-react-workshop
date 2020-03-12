const initialState = {
    number: 0,
    customText: "Hello World From Store"
}

export default (state = initialState,action)=>{
    //console.log("Hello From Counter Reducer", action);
    if(action.type === "SET_NUMBER"){
        let newNumber = ++state.number;
        return {
            ...state,
            number: newNumber,
            customText: action.payload + newNumber
        }
    }

    return state;
};
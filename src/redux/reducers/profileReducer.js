const initialState = {
    isLogin: false,
    data: {
        "id": null,
        "email": null,
        "first_name": "Test",
        "last_name": null,
        "avatar": null,
    }
}

export default (state = initialState,action)=>{
    switch(action.type){
        case "SET_USER": {
            return {
                ...state,
                isLogin: true,
                data: action.profile
            }
        }
        default: return state;
    }
};
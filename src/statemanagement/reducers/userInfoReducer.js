const initialState = {
    username:null,
    password:null,
    phoneNumber:null,
}

function userInfoReducer(state = initialState, action) {

    switch(action.type) {
        case "SET_USER_INFO":
            return action.payload;

        default:
            return state;

    }


}

export default userInfoReducer;
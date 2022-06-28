const initialState = {
    username:null,
    password:null,
    phoneNumber:null,
    userId:null,
    favoriteList: [],
}

function userInfoReducer(state = initialState, action) {

    switch(action.type) {
        case "SET_USER_INFO":
            return {
                ...state,
                ...action.payload
            }

        case "ADD_TO_USER_FAVORITE":
            console.log( state.favoriteList.concat(action.payload))
            return{
                ...state,
                favoriteList : state.favoriteList.concat(action.payload)
            }

        default:
            return state;

    }


}

export default userInfoReducer;
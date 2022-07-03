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

        case "SIGN_OUT":
            localStorage.removeItem("userId");
            return initialState;

        case "ADD_TO_USER_FAVORITE":
            return{
                ...state,
                favoriteList : state.favoriteList.concat(action.payload)
            }

        case "DELETE_FAVORITE_ITEM":
            return{
                ...state,
                favoriteList: state.favoriteList.filter(item=> item.favoriteId != action.payload)
            }

        default:
            return state;

    }


}

export default userInfoReducer;
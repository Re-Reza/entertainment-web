const initialState = {
    username:null,
    password:null,
    phoneNumber:null
}

function UserInfoReducer(state = initialState, action) {

    switch(action.type) {
        case "SET_USER_INFO":
        return {
            ...state,
            
        } 
    }

}
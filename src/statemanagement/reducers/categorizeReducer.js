const initialState = {
    category:null,
    type: null,
    submit:false,
}

function categorizeReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_CATEGORY":
            return{
                ...state,
                category: action.payload
            }
        
        case "SET_TYPE":
            return{
                ...state,
                type: action.payload
            }

        case "SET_SUBMIT_STATUS":
            return{
                ...state,
                submit : !state.submit
            }

        default:
            return state
    }
}

export default categorizeReducer;
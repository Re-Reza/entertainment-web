const initialState = {
    movies : {
        action:[],
        family:[],
        animation:[],
        comedy:[],
        historical:[],
        horrific:[],
        imaginary:[],
        drama:[],
        documentary:[]
    },
    series : {
        action:[],
        family:[],
        animation:[],
        comedy:[],
        historical:[],
        horrific:[],
        imaginary:[],
        drama:[],
        documentary:[]
    }
}

function contentReducer(state = initialState, action){
    
    switch(action.type){
        case "SET_CONTENT":
            return {
                ...action.payload,
            };

        default:
            return state;
    }
}

export default contentReducer;
export const setInfoOfUser = (userInfo)=>({
    payload : userInfo,
    type : "SET_USER_INFO"
});

export const addToFavorites = (item) =>({
    type:"ADD_TO_USER_FAVORITE",
    payload : item
});


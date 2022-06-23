import axios from "axios";

const userApi = axios.create({
    baseURL : "http://localhost:4000/",
    timeout : 10000
});

userApi.interceptors.response.use(function (response){

    return response;

},function (error){
    console.log(error);
    return Promise.reject(error);
});

export default userApi;

//خروجي response بايد ليست بايد که ايدي ايتم در سرور هم به ابجکت ان اضافه شده باشد
/*function findUser(data){
    const foundUser = Object.entries(data).find(item=>{
        if(item[1].userName === state.userName)
        {
            find method will return item if condition be true as the item is 
            if item be object return object if array return array,...
            and we can not change returned item
            return item;
        }
    })  
    return foundUser == undefined ? undefined : foundUser;
}*/
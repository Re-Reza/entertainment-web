import axios from "axios";

const userApi = axios.create({
    baseURL:"https://entertainment-web-db33a-default-rtdb.firebaseio.com/",
    timeout: 10000
});

//this is not correct and default must initialized during creating instance of axios
// userApi.defaults = {
//     baseURL:"https://entertainment-web-db33a-default-rtdb.firebaseio.com/",
//     timeout: 10000
// }

userApi.interceptors.response.use(function(response) {
    console.log(Object.entries(response.data));
    const data = Object.entries(response.data).map(item=>{
        return{
            id:item[0],
            ...item[1]
        }
    })
    console.log(data)
    return data;
}, function(error){
    return Promise.reject(error);
})

export default userApi;

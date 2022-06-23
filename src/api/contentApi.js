import axios from "axios";

const contentApi = axios.create({
    baseURL:"http://localhost:4000/",
    timeout:10000
});

contentApi.interceptors.response.use( function(response) {
    //باید دیتا را به شکل یک ابجکت که یک کلید ان لیست فیم است و یک کلید ان لیست سریال است بازگرداند
    return response;
},
function(error){
    return Promise.reject(error);
});

export default contentApi;
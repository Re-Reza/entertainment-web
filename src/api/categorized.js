import axios from "axios";

const categorizedContent = axios.create({
    baseURL : "http://localhost:4000/",
    timeout : 10000
});

categorizedContent.interceptors.response.use(function(response){
    return response;
}, function(error){
    return Promise.reject(error);
});

export default categorizedContent;
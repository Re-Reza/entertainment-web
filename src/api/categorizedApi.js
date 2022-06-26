import axios from "axios";

const categorizedContent = axios.create({
    baseURL : "https://entertainment-web-db33a-default-rtdb.firebaseio.com/content/",
    timeout : 10000
});

categorizedContent.interceptors.response.use(function(response){
    const data = Object.entries(response.data).map(item=>{
        const movies = Object.entries(item[1]).map(movie=> {
           return {
            id: movie[0],
            ...movie[1]
           }
        });
        return{
            categoryTitle : item[0],
            movies:movies
        }
    });

    //data contain an array with nine items, each item is object and each object contains category title (action, comedy,...) and list of movies
    return data;
    
}, function(error){
    return Promise.reject(error);
});

export default categorizedContent;
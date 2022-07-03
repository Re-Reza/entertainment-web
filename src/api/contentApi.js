import axios from "axios";

const contentApi = axios.create({
    baseURL:"https://entertainment-web-db33a-default-rtdb.firebaseio.com/",
    timeout:10000
});

contentApi.interceptors.response.use( function(response) {
    let data={};  
    Object.entries(response.data).forEach(item=>{
        let items={};
        Object.entries(item[1]).forEach(movieType=>{
            items={
                ...items,
                [movieType[0]]: Object.entries(movieType[1]).map(movie=>{
                    
                    return{
                        category:item[0],
                        type:movieType[0],
                        id:movie[0],
                        ...movie[1]
                    }
                })
            }
        })
        data={
            ...data,
            [item[0]] : items
        }
    });
    return data;
},
function(error){
    return Promise.reject(error);
});

export default contentApi;
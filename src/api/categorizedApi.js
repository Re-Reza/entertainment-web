import axios from "axios";

const categorizedContent = axios.create({
    baseURL : "https://entertainment-web-db33a-default-rtdb.firebaseio.com/content/",
    timeout : 10000
});

categorizedContent.interceptors.response.use(function(response){

    let data = {
        all : false,
        content : []
    };
    if(response.config.url == '.json'){
        const categoryMovies = Object.entries(response.data).map((item, index)=>{
            return{
                category:item[0],
                types:Object.entries(item[1]).map(typeItem=>({
                    type:typeItem[0],
                    movies: Object.entries(typeItem[1]).map(movieItem=>({
                        id: movieItem[0],
                        ...movieItem[1]
                    }))
                }))
            }
        });
        data = {
            all: true,
            content: categoryMovies
        }
    }
    else{
        const movieItems = Object.entries(response.data).map(item=>{
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

        data={
            ...data,
            content: movieItems 
        }
    }

    //data contain an array with nine items, each item is object and each object contains category title (action, comedy,...) and list of movies
    return data;
    
}, function(error){
    return Promise.reject(error);
});

function removeItem(array, value){
    const newArray = array.filter((item, index)=>{
        if(index != value)
            return item;
    });
    console.log(newArray);
    return newArray;
}

export default categorizedContent;



/*         let typeItems = [];
        Object.entries(response.data).map(categorizedMovies=>{
            typeItems = [
                ...typeItems,
                ...Object.entries(categorizedMovies[1])
            ];
        });
        console.log(typeItems)
        // let length = typeItems.length;
        let i=0;
        while(true){
            let indexKeeper;
            console.log(typeItems[i])
            if(typeItems.length == i)
                break;
            let foundItem = typeItems.find((item, index)=> {
                console.log(item[0])
                if(typeItems[i][0] == item[0])
                {
                    indexKeeper = index;
                    return item;
                }
            });
            console.log(foundItem);
            if(foundItem != undefined && foundItem != null){
                typeItems = removeItem(data, indexKeeper)
            }
            data = [
                ...data,
                {
                    category: typeItems[i][0],
                    movies: [
                        typeItems[i][1],
                        foundItem ? foundItem[1]: null,  
                    ]
                }
            ]
            i++;
        } */
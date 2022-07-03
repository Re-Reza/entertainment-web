import axios from "axios";

async function getUserFromServer(){
    const userId = localStorage.getItem('userId');
    if(userId)
    {
        let data;
        await axios.get(`https://entertainment-web-db33a-default-rtdb.firebaseio.com/users/${userId}.json`)
        .then(response => {
            const favoriteList = Object.entries(response.data.favoriteList).map(item=>{
                return{
                    ...item[1],
                    favoriteId : item[0]
                }
            });
            data = {
                userId,
                ...response.data,
                favoriteList : favoriteList
            }
        }).catch(err=>console.log(err));
        return data
    }
    return null;
}
export default getUserFromServer
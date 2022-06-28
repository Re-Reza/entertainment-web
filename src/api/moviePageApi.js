import axios from "axios";

const moviePageApi = axios.create({
    baseURL:"https://entertainment-web-db33a-default-rtdb.firebaseio.com/",
    timeout:10000
});

export default moviePageApi;
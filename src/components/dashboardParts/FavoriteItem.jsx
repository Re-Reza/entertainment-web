import React from 'react';
import { Link } from "react-router-dom";
import { BASE_URL } from '../baseUrl';
import moviePageApi from "../../api/moviePageApi";
import{connect} from "react-redux";


function mapStateToProps(state) {
    return{
        userId: state.userState.userId
    }
}
export default connect(mapStateToProps, null)(FavoriteItem)

function FavoriteItem(props){

    const { category, type, movieId, coverPic, title, favoriteId } = props.item;
    const { userId, dispatch} = props;

    const deleteFavoriteItem = ()=>{
        moviePageApi.delete(`users/${userId}/favoriteList/${favoriteId}.json`)
        .then((response)=>{
            console.log(response);
            dispatch({
                type: "DELETE_FAVORITE_ITEM",
                payload: favoriteId
            });
        }).catch((err)=>console.log(err))

    }

    return(
        <div className="favorite-item">
            <Link to={`${BASE_URL}${category}/${type}/${movieId}`}>
                <img className="favorite-item-img" src={coverPic} alt={title} />
            </Link>
            <div className="favorite-item-detail">
                <span>{title}</span>
                <span onClick={deleteFavoriteItem} className='remove-item' title="پاک کردن از لیست علاقه مندی"><i className="text-danger fa fa-trash-o" aria-hidden="true"></i> </span>
            </div>
        </div>        
    )
}


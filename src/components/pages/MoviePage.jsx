import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";


import {Comment, CreateComment, HeadPart} from "../moviePage-parts"
import {convertToPersian, convertNumberToPersian} from "../../converToPersian";
import {addToFavorites} from "../../statemanagement/actions/userInfoActions";
import {Loading3} from "../loading";
import moviePageApi from "../../api/moviePageApi";

import "../../css/moviePage.css";

function mapStateToProps(state) {
    return{
        username: state.userState.userName,
        password: state.userState.password,
        phoneNumber: state.userState.phoneNumber,
        userId: state.userState.userId 
    }
}

function mapDispatchToProps(dispatch) {
    return{
        addToFavoriteList : (newItem) =>{
            dispatch(addToFavorites(newItem))
        } 
    }
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)((props) =>{
    const [ state, setState] = useState({
        title:null,
        description:null,
        coverPic:null,
        rate:null,
        movieUrl: null,
        comments:[],
        isLoading:true
    });

    const { category, type, movieId } = useParams(); 
    const { title, description, coverPic, rate, movieUrl, isLoading} = state;
    const {username, userId, addToFavoriteList} = props;
    console.log(movieUrl)
    //برسی اینگه اگر کاربر این فیلم را لایک کرده دیگر نتوانتد لایک یا دیس لایک کند برای افزودن به علاقه مندی هم همینطور

    useEffect(()=>{
        moviePageApi.get(`content/${category}/${type}/${movieId}.json`)
        .then(response=>{

            const comments = response.data.comments != undefined && response.data.comments != null ?
            Object.entries(response.data.comments).map(item=>{
                return{
                    ...item[1],
                    id:item[0]
                }
            }) : [];
  
            setState({
                ...response.data,
                comments:comments || [],
                isLoading:false
            });
        }).catch(error=>{
            console.log(error);
        })
    },[]);

    function addToComments(newComment){
        setState({
            ...state,
            comments: state.comments.concat(newComment)
        });
    }

    function sendToUserFavorites(){
        const favoriteItem = {title, coverPic, category, type, movieId}
        moviePageApi.post(`users/${userId}/favoriteList.json`,favoriteItem)
        .then(response=>{
            console.log(response)
            addToFavoriteList(favoriteItem);
        }).catch(err=>console.log(err));
    }

    function likeAndUnlike(value)
    {
        const {isLoading, ...newData} = state;
        newData.rate = state.rate + value;
        moviePageApi.put(`content/${category}/${type}/${movieId}.json`, newData)
        .then(response=>{
            setState({
                ...state,
                rate: state.rate+value
            });
        }).catch(error => console.log(error));
    }
    let rateResult;
    if(rate!=null && rate!=undefined) {
        if(rate>0)
            rateResult = convertNumberToPersian(rate)+"+";
        else if(rate<0)
            rateResult = convertNumberToPersian(Math.abs(rate))+"-"
        else
            rateResult = convertNumberToPersian(rate);
        
    }
    // قرار دادن فیلتر مات شدن پس زمینه برای فایرفاکس
    return(
        <div className="MoviePage-container">
            <section className="MoviePage-container-headSection">
                {
                    isLoading?
                    <div className="MoviePage-loadingContainer">
                        <Loading3/>
                    </div>
                    :
                    <article className="MoviePage-head">
                        <HeadPart movieData={{movieUrl, title, coverPic}} />
                        <div className="MoviePage-head-infoContainer">
                            <h5>{title}</h5>
                            <div >
                                <span className="MoviePage-head-rate">
                                    <span><i className="fa fa-thumbs-up" aria-hidden="true"></i></span>
                                    <span>{rateResult}</span>
                                </span>
                            </div>
                            <p>{description}</p>
                            <div>
                                <span className="MoviePage-tag rounded-pill">{convertToPersian(category)}</span>
                                &nbsp;
                                <span className="MoviePage-tag rounded-pill">{convertToPersian(type)}</span>
                            </div>
                        </div>
                    </article>
                }

                <article className="MoviePage-head-options-container">

                    <span onClick={sendToUserFavorites} className="MoviePage-head-option bookmark">
                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                        نشان کردن
                    </span>
                    <span onClick={likeAndUnlike.bind(this, 1)} className="like rate-option MoviePage-head-option">
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    </span>
                    <span onClick={likeAndUnlike.bind(this, -1)} className="unlike rate-option MoviePage-head-option">
                        <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                    </span>

                </article>   
                
            </section>

            <section className="Movie-page-commentPart">
                <article className="Movie-page-commentContainer">
                    <div className="commentContainer-createComment">
                        <CreateComment addToComments={addToComments} username={username} moviePath={{category, type, movieId}}/>
                    </div>
                    
                    <div className="comments-container">
                        <h3 className='comments-container-tile'>نظرات</h3>
                        <div>
                        {
                            state.comments.map((comment, index)=><Comment comment={comment} key={index} />)
                        }
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
})


export const MoviePage = ()=> {
    return <ConnectedComponent/>
}
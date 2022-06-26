import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

import {convertToPersian} from "../../converToPersian";
import "../../css/MoviePage.css";


export const MoviePage = () =>{

    const [ state, setState] = useState({
        title:null,
        description:null,
        coverPic:null,
        rate:null,
        movieUrl: null,
        isLoading:true,
    });
    const { category, type, movieId } = useParams(); 

    useEffect(()=>{
        console.log(`https://entertainment-web-db33a-default-rtdb.firebaseio.com/${category}/${type}/${movieId}.json`)
        axios.get(`https://entertainment-web-db33a-default-rtdb.firebaseio.com/content/${category}/${type}/${movieId}.json`)
        .then(response=>{
            setState({
                ...response.data,
                isLoading:false
            });
        }).catch(error=>{
            console.log(error);
        })
    },[]);

    const { title, description, coverPic, rate, movieUrl, isLoading} = state;

    return(
        <div className="MoviePage-container">
            <section className="MoviePage-head">
                <div className="MoviePage-head-imgContainer">
                    <img src={coverPic} alt={title} />
                </div>
                <div className="MoviePage-head-infoContainer">
                    <h5>{title}</h5>
                    <div >
                        <span className="MoviePage-head-rate">
                            <span><i className="fa fa-thumbs-up" aria-hidden="true"></i></span>
                            <span>{rate} %</span>
                        </span>
                    </div>
                    <p>{description}</p>
                    <div>
                        <span className="MoviePage-tag rounded-pill">{convertToPersian(category)}</span>
                        &nbsp;
                        <span className="MoviePage-tag rounded-pill">{convertToPersian(type)}</span>
                    </div>
                </div>
            </section>    

        </div>
    )
}
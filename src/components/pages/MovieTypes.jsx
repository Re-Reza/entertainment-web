import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import MovieItem from "../categorizePart/MovieItem";
import {convertToPersian} from "../../converToPersian";
import {CategorizedPart} from "../categorizePart"
import { Loading2 } from '../loading';

import "../../css/movieType.css";

export const MovieTypes = () => {

    const {category, type} = useParams();
    const [state, setState] = useState({
        movieList: [],
        typeObject: {},
        categoryObj: {},
        loading : true
    });


    //using self invoking function in useEffect
    useEffect(()=>{
        document.title=convertToPersian(category)+" | "+convertToPersian(type);
        (async () =>{
            const response = await fetch(`https://entertainment-web-db33a-default-rtdb.firebaseio.com/content${category == 'all'? "" : "/"+category+"/"+type}.json`);
            const data = await response.json();
            let movieList = [];
            if( category == 'all')
            {   
                Object.entries(data || {}).map(item=>{
                    Object.entries( item[1] || {} ).map(typeMovie=>{
                        console.log(typeMovie)
                        if( typeMovie[0] == type){
                            movieList = [
                                ...movieList,
                                ...Object.entries(typeMovie[1]).map(movie=> ({
                                    id:movie[0],
                                    ...movie[1]
                                }))
                            ]
                        }
                        
                    })
                });
                console.log(movieList);

            }   
            else{
                movieList = Object.entries(data || {} ).map(item =>({
                    id:item[0],
                    ...item[1]
                }));
            }
            setState({
                ...state,
                movieList,
                loading:false,
                typeObject: {
                    persianCategoryTitle:convertToPersian(type),
                    categoryTitle:type
                },
                categoryObj: {
                    value: category,
                    name:convertToPersian(category)
                }
            })
        })();
    }, [type,category])

    return<div className="movieType-container">
        <CategorizedPart/>

        <h3>
            <span>
                <span>{convertToPersian(category)}</span>&nbsp;
                /&nbsp;&nbsp;
                <span>{convertToPersian(type)}</span>
            </span>
        </h3>
        {
            state.loading ?
            <div className="d-flex justify-content-center align-items-center">
                <Loading2/>
            </div> 
            :
            <div className="movieType-itemsContainer">
            {
                state.movieList.map((item,index)=><MovieItem movie={item} type={state.typeObject} category={state.categoryObj}  key={index}/> )
            }
            </div>
        }
        
    </div>


}
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import MovieItem from "../categorizePart/MovieItem";
import {convertToPersian} from "../../converToPersian";
import {CategorizedPart} from "../categorizePart"

import "../../css/movieType.css";

export const MovieTypes = () => {

    const {category, type} = useParams();
    const [state, setState] = useState({
        movieList: [],
        typeObject: {},
        categoryObj: {}
    });


    //using self invoking function in useEffect
    useEffect(()=>{
        (async () =>{
            const response = await fetch(`https://entertainment-web-db33a-default-rtdb.firebaseio.com/content/${category}/${type}.json`);
            const data = await response.json();
            console.log(Object.entries(data))
            const movieList = Object.entries(data).map(item =>({
                id:item[0],
                ...item[1]
            }));
            setState({
                ...state,
                movieList,
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
        <div className="movieType-itemsContainer">
            {
                state.movieList.map((item,index)=><MovieItem movie={item} type={state.typeObject} category={state.categoryObj}  key={index}/> )
            }
        </div>
        
    </div>


}
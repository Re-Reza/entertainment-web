import React from 'react';
import {Link} from "react-router-dom"
import {BASE_URL} from "../baseUrl";

function MovieItem(props) {

    const {title, rate, coverPic, id} = props.movie;
    const {typeObject, category } = props.type;
    console.log(typeObject);
    console.log(`${BASE_URL}${category.value}/${id}`)
    return (    
        <Link to={`${BASE_URL}${category.value}/${typeObject.categoryTitle}/${id}`}>
        <div className="categoryContent-movieItem">
           
                <div className="categoryContent-movieItem-imgContainer">
                    <img src={coverPic} alt={title} />
                    <div className="categoryContent-movieInfo">
                        <span className="categoryContent-movieInfo-item">{typeObject.persianCategoryTitle}</span>
                        <span className="categoryContent-movieInfo-item">{title}</span>
                        <span className="rateContainer categoryContent-movieInfo-item">
                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                            {rate}
                        </span>
                    </div>         
                </div>
                <h6>{title}</h6>
        </div>
        </Link>
    )

}

export default MovieItem;
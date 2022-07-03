import React from 'react';
import {Link} from "react-router-dom"
import {BASE_URL} from "../baseUrl";
import {convertNumberToPersian} from "../../converToPersian";

function MovieItem(props) {

    const {title, rate, coverPic, id} = props.movie;
    const {type, category } = props;

    let rateResult;
    if(rate>0)
        rateResult = convertNumberToPersian(rate)+"+";
    else if(rate<0)
        rateResult = convertNumberToPersian(Math.abs(rate))+"-"
    else
        rateResult = convertNumberToPersian(rate);
    return (    
        <Link to={`${BASE_URL}${category.value}/${type.categoryTitle}/${id}`}>
            <div className="categoryContent-movieItem">
                <div className="categoryContent-movieItem-imgContainer">
                    <img src={coverPic} alt={title} />
                    <div className="categoryContent-movieInfo">
                        <span className="categoryContent-movieInfo-item">{type.persianCategoryTitle}</span>
                        <span className="categoryContent-movieInfo-item">{title}</span>
                        <span className="rateContainer categoryContent-movieInfo-item">
                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                            {rateResult}
                        </span>
                    </div>         
                </div>
                <h6>{title}</h6>
            </div>
        </Link>
    )

}

export default MovieItem;
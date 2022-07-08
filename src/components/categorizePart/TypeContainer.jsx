import React from 'react';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';
import {convertToPersian} from "../../converToPersian";
import { Loading2 } from "../loading/Loading2";

export function TypeContainer(props) {

    const { categoryTitle, movies,category } = props.movieType;
    const persianCategoryTitle = convertToPersian(categoryTitle);
    console.log(props.borderBottom)
    const typeObject = {
        persianCategoryTitle,
        categoryTitle
    }
    const categoryObj = {
        value: category,
        name: convertToPersian(category)
    }

    return (
        <article className="categoryContent-TypeContainer">
            {
            <>
                {
                    persianCategoryTitle?
                    <h5 className="category-TypeContainer-title">
                        {persianCategoryTitle}
                    </h5>:<></>
                }

                <div className={ props.borderBottom ? 'categoryContent-TypeContainer-movies border-bottom' : 'categoryContent-TypeContainer-movies'} >
                    {
                        movies.map((item, index) => <MovieItem type={typeObject} category={categoryObj} movie={item} key={index} />)
                    }
                </div>
            </>
            }

        </article>

    )

}
import React from 'react';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';
import {convertToPersian} from "../../converToPersian";
import { Loading2 } from "../loading/Loading2";

export function TypeContainer(props) {

    const { categoryTitle, movies,category } = props.movieType;
    const persianCategoryTitle = convertToPersian(categoryTitle);
    const typeObject = {
        persianCategoryTitle,
        categoryTitle
    }
    return (
        <article className="categoryContent-TypeContainer">
            {
                props.loading ? <Loading2 />
                    :
                    <>
                        <h5 className="category-TypeContainer-title">
                            {/* fix path of Link */}
                            <Link to="/">{persianCategoryTitle}</Link>
                        </h5>

                        <div className="categoryContent-TypeContainer-movies">
                            {
                                movies.map((item, index) => <MovieItem type={{typeObject, category}} movie={item} key={index} />)
                            }
                        </div>
                    </>
            }

        </article>

    )

}
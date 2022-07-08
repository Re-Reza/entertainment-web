import React from 'react';
import {TypeContainer} from "./TypeContainer";
import { convertToPersian } from '../../converToPersian';

export function AllMovies(props){

    const {category, types} = props.content;
    const{endIndex, currentIndex} = props;

    return(
       <>
            <article className="allMovies-categoryMovies">
                <h3>{convertToPersian(category)} ها</h3>

                <div>
                    {
                        types.map((item, index) => <TypeContainer borderBottom={(currentIndex == endIndex) && (types.length-1 === index) ? false : true} movieType={item} key = {index}/>)
                    }
                </div>

            </article>
       </>
    )
}
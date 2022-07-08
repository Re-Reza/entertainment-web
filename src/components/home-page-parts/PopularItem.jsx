import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {BASE_URL} from "../baseUrl";

export class PopularItem extends Component {

    render(){
        const {coverPic, title, rate, category, type, id} = this.props.item;
        return(
            <div className="popular-item">
                <Link target="_blank" to={`${BASE_URL}${category}/${type}/${id}`}>
                    <div className="popular-item-container">
                            <img className="popular-item-img" src={coverPic} alt={title}/>
                        </div>
                </Link>
            </div>
        )

    }
}


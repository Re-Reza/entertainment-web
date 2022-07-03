import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {BASE_URL} from "../baseUrl";

export class PopularItem extends Component {

    render(){
        const {coverPic, title, rate, category, type, id} = this.props.item;
        //اضافه کردن دسته بندی؟
        //این بخش را به شکل اسلایدر در بیار؟
        return(
            <div className="popular-item">
                <Link to={`${BASE_URL}${category}/${type}/${id}`}>
                    <div className="popular-item-container">
                            <img className="popular-item-img" src={coverPic} alt={title}/>
                            {/* <div className="popular-item-detail"> 
                                <span>{title}</span>
                                <span>{rate}</span>
                            </div> */}
                        </div>
                </Link>
            </div>
        )

    }
}


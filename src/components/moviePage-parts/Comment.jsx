import React from 'react';
import {convertNumberToPersian} from "../../converToPersian";

export const Comment = (props) =>{

    //تیدیل تاریخ به فارسی
    const { user, text, date,time } = props.comment;

    return(
        <div className="commentContainer">
            <div className="comment-content"> 
                <span>{user}</span>&nbsp;&nbsp;
                <span>{date}</span>&nbsp;&nbsp;
                <span>ساعت {convertNumberToPersian(time)} </span>
            </div>
            <p>{text}</p>
        </div>
    )
}
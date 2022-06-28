import React from 'react';
import {convertNumberToPersian} from "../../converToPersian";

export const Comment = (props) =>{

    //تیدیل تاریخ به فارسی
    const { user, text, date,time } = props.comment;

    return(
        <div className="commentContainer">
            <div>
                <span>
                    <span>{date}</span>
                    <span>{time}</span>
                </span>
                <span>{user}</span>
            </div>
            <p>{text}</p>
        </div>
    )
}
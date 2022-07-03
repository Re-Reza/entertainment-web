import React from 'react';
import {Link} from "react-router-dom";
import { BASE_URL } from '../baseUrl';

export function HeadPart(props){

    const {username} = props.userData;
   
    return(
        <div className="dashboard-head">
        
            <div className="dashboard-head-rightPart">
                <div>{username} گرامی خوش آمدید</div>
                <div className="dashboard-date">{new Date().toLocaleDateString("fa-IR")}</div>
            </div>
            
            <div className ="dashboard-head-leftPart">

               <Link to={BASE_URL+"home"}><i className="fa fa-home" aria-hidden="true"></i> صفحه اصلی</Link>
               <div className = "dashboard-head-profileContainer">
                    <img src="" alt="profile-img" /> 
               </div>
            
            </div>
        
        </div>
    )
}
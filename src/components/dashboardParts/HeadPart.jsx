import React from 'react';
import {Link} from "react-router-dom";
import { BASE_URL } from '../baseUrl';

export function HeadPart(props){

    const {username} = props.userData;
   
    function showAside(){
        console.log(document.querySelector(".dashboard-aside"))
        document.querySelector(".dashboard-aside").classList.add("show-aside")
    
    }

    return(
        <div className="dashboard-head">
        
            <div className="dashboard-head-rightPart">
                <div className="side-barMenu-button">
                    <button onClick={showAside}><i className="fa fa-bars" aria-hidden="true"></i></button>
                </div>
                
                <div className="dashboard-head-wellcomeMessage">
                    <div>{username} گرامی خوش آمدید</div>
                    <div className="dashboard-date">{new Date().toLocaleDateString("fa-IR")}</div>
                </div>
                
            </div>
            
            <div className ="dashboard-head-leftPart">

               <Link to={BASE_URL}><i className="fa fa-home" aria-hidden="true"></i> صفحه اصلی</Link>
               {/* <div className = "dashboard-head-profileContainer">
                    <img src="" alt="profile-img" /> 
               </div> */}
            
            </div>
        
        </div>
    )
}
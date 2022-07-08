import React,{Component} from "react";
import {Link} from "react-router-dom";
import { BASE_URL } from "../baseUrl";
import UserIcon from "./UserIcon";

import "../../css/header.css"



class Header extends Component {

    //میتوان لینک ها رادر استیت ریخت و با کمک کامپوننت انها را اورد به این شکل که می توان انگلیسی لینک را داد و فارسی انرا با کمک متدی که خودمان نوشتیم اورد
    
    render(){

        return(
            <header className="header-container">    
                <h1 className="header-title">سینما <span>آنلاین</span></h1>
                
                <div className="header-category-container">
                    <div className="header-category-title">
                        <Link to={BASE_URL+"movies"}>فیلم <i className="fa header-drop-arrow fa-angle-down" aria-hidden="true"></i></Link>
                    </div>
                    <ul className="header-category-dropdown">
                        <li className="header-link-container">
                            <Link to= { BASE_URL+"movies/action"}>اکشن</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"movies/imaginary"}>علمی تخیلی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"movies/family"}>خانوادگی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"movies/drama"}>عاشقانه</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"movies/animation"}>انیمیشن</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"movies/documentary"}>مستند</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"movies/comedy"}>کمدی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"movies/horrific"}>وحشت</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"movies/historical"}>تاریخی</Link>
                        </li>
                    </ul>
               </div>

               <div className="header-category-container">
                    <div className="header-category-title">
                        <Link to={BASE_URL+"series"}>
                            سریال <i className="fa  header-drop-arrow fa-angle-down" aria-hidden="true"></i>
                        </Link>    
                    </div>
                    <ul className="header-category-dropdown">
                        <li className="header-link-container">
                            <Link to={BASE_URL+"series/action"}>اکشن</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"series/imaginary"}>علمی تخیلی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"series/family"}>خانوادگی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"series/drama"}>عاشقانه</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"series/animation"}>انیمیشن</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"series/documentary"}>مستند</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"series/comedy"}>کمدی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"series/horrific"}>وحشت</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to= {BASE_URL+"series/historical"}>تاریخی</Link>
                        </li>
                    </ul>
               </div>

               <div className="header-search-container">
                    <input className="header-search-input" placeholder="جستجو"/>
                    <button className="header-search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
               </div>

               <div className="header-user-options">
                    {
                        window.location.pathname ==  BASE_URL ?
                        <></>:                   
                        <div className="header-returnHome">
                            <Link to={BASE_URL}><i className="fa fa-home" aria-hidden="true"></i> صفحه اصلی</Link>
                        </div>
                    }
                    <UserIcon/>
               </div>

            </header>
        )
    }
}

export default Header;
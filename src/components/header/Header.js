import React,{Component} from "react";
import "../../css/header.css"
import {Link} from "react-router-dom";
import { BASE_URL } from "../baseUrl";

import UserIcon from "./UserIcon";

class Header extends Component {

    componentDidMount() {
        //here get 
        // console.log(useLocation()) //can not be call it is a hook
    }
    //link of this component must have to url and UserIcon too

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
                            <Link to={"/"}>اکشن</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">علمی تخیلی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">خانوادگی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">عاشقانه</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">انیمیشن</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">مستند</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">کمدی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">وحشت</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">تاریخی</Link>
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
                            <Link to="">اکشن</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">علمی تخیلی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">خانوادگی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">عاشقانه</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">انیمیشن</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">مستند</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">کمدی</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">وحشت</Link>
                        </li>
                        <li className="header-link-container">
                            <Link to="">تاریخی</Link>
                        </li>
                    </ul>
               </div>

               <div className="header-search-container">
                    <input className="header-search-input" placeholder="جستجو"/>
                    <button className="header-search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
               </div>

               <div className="header-user-options">
                    <button className="btn btn-success"><i className="fa fa-shopping-cart" aria-hidden="true"></i> خرید اشتراک</button>
                    <UserIcon/>
               </div>

            </header>
        )
    }
}

export default Header;
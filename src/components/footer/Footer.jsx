import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BASE_URL } from "../baseUrl";

import "../../css/footer.css";

function Footer(){

    const {pathname} = useLocation();
    
    if(pathname == BASE_URL+'signin'){
        return <></>
    }

    return(
        <footer id="footer">

        <section className="footer-top-section">
            
            <article className="footer-top-partContainer">
                <h2 className="footer-title"><span>سینما</span> آنلاین</h2>
                <p>سینما را به خانه بیاورید</p>
            </article>
            
            <article className="footer-top-partContainer">
                <ul className="footer-itemsContainer">
                    <li>
                        <Link to="#">ارتباط با ما</Link>    
                    </li>

                    <li>
                        <Link to="#">نظرات</Link>    
                    </li>

                    <li>
                        <Link to="#">گزارش باگ</Link>    
                    </li>
                </ul>
            </article>
            
            <article className="footer-top-partContainer">
                <ul  className="footer-itemsContainer">
                    <li>
                        
                        <Link to="#">خدمات</Link>
                    </li>

                    <li>
                        <Link to="#">پشتیبانی</Link>
                    </li>

                    <li>
                        <Link to="#">حریم خصوصی</Link>
                    </li>

                    <li>
                        <Link to="#">قوانین و ضوابط</Link>
                    </li>

                </ul>

            </article>
            
            <article className="footer-top-partContainer">

                <ul className="footer-itemsContainer">
                    <li>
                        <Link to="#">
                            <button className="btn btn-success"><i className="fa fa-shopping-cart" aria-hidden="true"></i> خرید اشتراک</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">پیشنهادات</Link>
                    </li>
                    <li>
                        <Link to="#">جدیدترین ها</Link>
                    </li>
                </ul>

            </article>

        </section>

        <section className="footer-bottom-section">

            <div className="footer-bottom-iconContainer">
               <span className="footer-social-container facebook">
                    <Link className="footer-icon " to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
               </span>
               
               <span className="footer-social-container instagram">
                    <Link className="footer-icon " to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
               </span>
               
               <span className="footer-social-container twitter">
                    <Link className="footer-icon" to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
               </span>
               
               <span className="footer-social-container youtube">
                    <Link className="footer-icon " to="#"><i className="fa fa-youtube" aria-hidden="true"></i></Link>
               </span>

            </div>
            <div>
                all rights reserved&copy;
            </div>

        </section>
    
    </footer>
    )
}

export default Footer;
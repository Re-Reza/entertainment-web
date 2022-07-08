import React, { useEffect, useState } from "react";
import {connect} from "react-redux";
import { setInfoOfUser } from "../../statemanagement/actions/userInfoActions";
import axios from 'axios';
import { Link } from "react-router-dom";
import {BASE_URL} from "../baseUrl";
import getUserFromServer from "../../getUserFromServer";

function mapStateToProps(state){
    return {
        userInfo : state.userState
    }
}
const mapDispatchToProps = (dispatch) =>({
    setUserInfo : (data) => dispatch(setInfoOfUser(data)),
    signOutUser : () => dispatch({type: "SIGN_OUT"})
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);

function UserIcon(props){

    const {setUserInfo, userInfo, signOutUser} = props;
    const {userName, phoneNumber} = userInfo;
    useEffect(()=>{
        getUserFromServer().then((data)=>{
            if(data) 
                setUserInfo(data);
        });

    }, []);

const [state, setState] = useState(false)

    useEffect(()=>{
        if(state == true){
            console.log("sending...");
            (async ()=>{
                const postData = {
                    title:'هیهات',
                    description: 'فیلم هیهات یک فیلم اپیزودی و با موضوعات اجتماعی و مفاهیم عاشورایی است...',
                    movieUrl:'https://aspb13.asset.aparat.com/aparat-video/2fcc88217f46a0a9ba846ddb111e71055784370-1080p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjZjOWY3ZWFjNDEwNzk2YTlmZTU5OTU2NzE5ZjE0MWUyIiwiZXhwIjoxNjU3MzAxNzYyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.exFirV6JlC43-O8zeVPi29rAu2Ze9GT-XxgzVhaKZDo',
                    rate: 0,
                    coverPic:"https://static.cdn.asset.filimo.com/flmt/mov_3440_1-m.jpg"
                }
                //اپلود فیلم بعد از دن کلید پلی 
                axios.post("https://entertainment-web-db33a-default-rtdb.firebaseio.com/content/movies/historical.json", postData)
                .then(response => console.log(response))
                .catch(err=>console.log(err))
            })();
            setState(false)
        }
    }, [state])

    const path = window.location.pathname
    return(
        <div className="user-icon-option-container">
             <button onClick={()=>{setState(true)}}>send</button>
            <Link to={userName? BASE_URL+"dashboard" : BASE_URL+path.substring(1, path.length)}>
                <div className="user-icon-container">
                    <div className="user-icon-logo">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <i className="fa header-drop-arrow fa-angle-down text-white" aria-hidden="true"></i>
                </div>
            </Link>
            
            <div className="user-info-box">
                <ul className="user-info-box-links">
                    <li className="">
                        {
                            userName == null ?
                            <Link to={BASE_URL+"signin"}>ورود به حساب کاربری</Link>
                            : 
                        <>
                                <p className='mb-2'>{userName}</p>
                                <p>{phoneNumber}</p>
                        </>
                        }
                    </li>
                    <li className="header-link-container">
                        {
                            userName?
                            <Link to={BASE_URL+"dashboard"}>پنل کاربری</Link>
                            :
                            <span>شما به عنوان مهمان وارد شده اید</span>
                        }
                    </li>
                    {
                        userName != null?
                        <li className="header-link-container">
                            <Link to={BASE_URL+"signin"}>ورود با حساب دیگر</Link>   
                        </li>
                        :<></>
                    }
                    {
                        userName?
                        <li onClick={signOutUser} className="header-link-container">
                            <span className="user-info-box-exit">
                                <i className="text-danger fa fa-sign-out" aria-hidden="true"></i>
                                خروج از حساب کاربری     
                            </span>
                        </li>:
                        <li onClick={signOutUser} className="header-link-container">
‍                           <Link to={BASE_URL+"signin"}>صفحه ورود</Link>
                        </li>
                    }
                </ul>

            </div>
        </div>
        
    )
}

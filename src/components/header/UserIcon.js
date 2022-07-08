import React, { useEffect } from "react";
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

    const path = window.location.pathname
    return(
        <div className="user-icon-option-container">
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

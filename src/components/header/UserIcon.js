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

    return(
        <div className="user-icon-option-container">
            <Link to={BASE_URL+"dashboard"}>
                <div className="user-icon-container">
                    <div className="user-icon-logo">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <i className="fa header-drop-arrow fa-angle-down text-white" aria-hidden="true"></i>
                </div>
            </Link>
            
            <div className="user-info-box">
                <div className="user-info-box-data">
                    {/* <img/> */}
                    {
                        userName == null ?
                        <div className="header-link-container mb-2">
                            <Link to={BASE_URL+"signin"}>ورود به حساب کاربری</Link>
                        </div>
                        : 
                       <>
                            <p >{userName}</p>
                            <p>{phoneNumber}</p>
                       </>
                    }
                </div>
                <ul className="user-info-box-links">
                    <li className="header-link-container">
                        <Link to={BASE_URL+"dashboard"}>پنل کاربری</Link>
                    </li>
                    {
                        userName != null?
                        <li className="header-link-container">
                            <Link to={BASE_URL+"signin"}>ورود با حساب دیگر</Link>   
                        </li>
                        :<></>
                    }
                    <li onClick={signOutUser} className="header-link-container">
                        <span className="user-info-box-exit">
                            <i className="text-danger fa fa-sign-out" aria-hidden="true"></i>
                            خروج از حساب کاربری     
                        </span>
                    </li>
                </ul>

            </div>

        </div>
    )
}

import React, { useEffect } from "react";
import {connect} from "react-redux";
import { setInfoOfUser } from "../../statemanagement/actions/userInfoActions";
import axios from 'axios';
import { Link } from "react-router-dom";
import {BASE_URL} from "../baseUrl";

function mapStateToProps(state){
    return {
        userInfo : state.userState
    }
}
const mapDispatchToProps = (dispatch) =>({
    setUserInfo : (data) => dispatch(setInfoOfUser(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);

function UserIcon(props){

    const {setUserInfo, userInfo} = props;
    const {userName, phoneNumber} = userInfo;
    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        if(userId != null && userId != undefined) 
        {
            axios.get(`https://entertainment-web-db33a-default-rtdb.firebaseio.com/users/${userId}.json`)
            .then(response => {
                setUserInfo(response.data)
            }).catch(err=>console.log(err));
        }
    }, []);

    function exitUser(){
        setUserInfo({
            userName:null, 
            phoneNumber:null,
            password:null,
        })
    }

    return(
        <div className="user-icon-option-container">
            <Link to="/">
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
                        <Link to="/">پروفایل من</Link>
                    </li>
                    <li className="header-link-container">
                        <Link to="/">خروج از حساب کاربری</Link>   
                    </li>
                    <li onClick={exitUser} className="header-link-container">
                        <Link to={BASE_URL+"signin"}>
                            <span className="user-info-box-exit">
                                <i className="text-danger fa fa-sign-out" aria-hidden="true"></i>
                                خروج از حساب کاربری     
                            </span>
                        </Link>   
                    </li>
                </ul>

            </div>

        </div>
    )
}

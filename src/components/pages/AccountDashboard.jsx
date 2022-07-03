import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import {HeadPart, MainPart, FavoriteList, ChangeAccountInfo, AccountInfo} from "../dashboardParts";
import getUserFromServer from "../../getUserFromServer";
import {setInfoOfUser} from "../../statemanagement/actions/userInfoActions";

import "../../css/accountDashboard.css";

function mapStateToProps(state) {
    const userState = state.userState;
    return{
        username: userState.userName,
        password: userState.password,
        favoriteList: userState.favoriteList,
        phoneNumber: userState.phoneNumber,
        userId: userState.userId
    }
}

function mapDispatchToProps(dispatch) {
    return{
        setUserInfo: (data)=>{
            dispatch(setInfoOfUser(data));
        }
    }
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(function(props){

    const {setUserInfo, username, password, favoriteList, phoneNumber} = props;

    useEffect(()=>{
        getUserFromServer().then(data=>setUserInfo(data))
    }, []);

    const [showState, setShowState] = useState({
        main:true,
        favoriteListPart:false,
        accountInfo:false,
        changeAccountInfo:false,
    });
    const{ main, favoriteListPart, accountInfo, changeAccountInfo} = showState;
    //give option to add profile img

    function switchPart(selected){
        const notSelectedItems = {};
         Object.keys(showState).forEach(key => {
            showState[key] =false
        });
        setShowState({
            ...showState,
            [selected] : true
        });
    }
    
    let ActivePartComponent;
    if(main)
        ActivePartComponent = MainPart;
    else if(favoriteListPart)
        ActivePartComponent = FavoriteList;
    else if(accountInfo)
        ActivePartComponent = AccountInfo;
    else if( changeAccountInfo)
        ActivePartComponent = ChangeAccountInfo;

    return (
        <div className="dashboard-mainContainer">
            <div className="dashboard-head-aside-container">
                <header id="dashboard-header">
                    <HeadPart userData={{username,}}/>
                </header>
                <aside className="dashboard-aside">
                    <h3>پنل حساب کاربری</h3>
                    <ul className="dashboard-aside-itemsContainer">
                        <li onClick={()=>{switchPart('main')}} className={main?"selected dashboard-aside-partBtn":"dashboard-aside-partBtn"}>
                            بخش اصلی
                        </li>
                        <li onClick={()=>{switchPart('favoriteListPart')}} className={favoriteListPart?"selected dashboard-aside-partBtn":"dashboard-aside-partBtn"}>
                            لیست علاقه مندی ها
                        </li>
                        <li onClick={()=>{switchPart('accountInfo')}} className={accountInfo?"selected dashboard-aside-partBtn":"dashboard-aside-partBtn"}>
                            اطلاعات کاربری
                        </li>
                        <li onClick={()=>{switchPart('changeAccountInfo')}} className={changeAccountInfo?"selected dashboard-aside-partBtn":"dashboard-aside-partBtn"}>
                            تغییر اطلاعات حساب
                        </li>
                    </ul>
                </aside>
            </div>
            
            <section className="dashboard-content-section">
                {
                    <ActivePartComponent userData={props}/>
                }
            </section>

        </div>
    )
});



export const AccountDashboard = () =>{

    return (
        <ConnectedComponent/>
    )
}

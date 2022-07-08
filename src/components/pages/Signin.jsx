import React, { useState, useEffect } from 'react';
import "../../css/signin.css"
import axios from "axios";
import {BASE_URL} from "../baseUrl";
import { Loading1 } from '../loading';
import { useNavigate } from 'react-router-dom';
import userApi from"../../api/uerApi";

export function SignIn () {

    const [state, setState] = useState({
        userName:"",
        password:"",
        phoneNumber:"",
        createAccount:false,
        loading:false,
    });

    const navigate = useNavigate();

    useEffect(()=>{
        document.title = state.createAccount ? "ثبت نام" : "ورود";
    }, [state.createAccount]);

    const [errorState, setErrorState]= useState({
        userNameError:"",
        passwordError:"",
        phoneError:"",
        wrongInfoError : false,
    })

    function toggleLoginStatus(){
        setState({
            ...state,
            createAccount: !state.createAccount,
        });
    }

    const inputHandler = (objectKey, event) => {;
        setState((previousState)=>({
            ...previousState,
            [objectKey] : event.target.value,
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(validateInputs()){
            setState({
                ...state,
                loading:true,
            })
            if(state.createAccount)
            {
                const {createAccount, loading,...data} = state;
                axios.post("https://entertainment-web-db33a-default-rtdb.firebaseio.com/users.json",data)
                .then(response=>{
                    console.log(response);
                    alert("حساب شما با موفقیت ایجاد شد")
                    setState({
                        ...state,
                        loading:false,
                    });
                })
                .catch(error=>console.log(error));
            }
            else{
                userApi.get("users.json")
                .then(response=>{
                    console.log(response)
                    setState({
                        ...state,
                        loading:false,
                    });
                    const foundUser = response.find(user=>{
                        if(user.userName === state.userName)
                            return user;
                    });

                    if(foundUser != undefined && foundUser.password == state.password )
                    {
                        localStorage.setItem('userId', foundUser.id);
                        navigate(BASE_URL);
                    }
                    else{
                        setErrorState({
                            ...state,
                            wrongInfoError:true,
                        });
                    }

                })
                .catch(error=>console.log(error));
            }
        }
    }

    function validateInputs(){
        let errorObj = {

        };
        if(state.userName == '')
        {   
            errorObj.userNameError = "لطفا اسم خود را وارد کنید"
        }
        if(state.password == '')
        {   
            errorObj.passwordError = "لطفا رمز عبور خود را وارد کنید"
        }
        if(state.phoneNumber == '' && state.createAccount)
        {   
            errorObj.phoneError = "لطفا شماره تلفن خود را وارد کنید"
        }
    
        setErrorState(errorObj);
        return Object.keys(errorObj).length == 0 ? true : false;
    }

    return (
        <div className="signin-container">

            <div className="signin-box">
                <form id="signin-from" onSubmit={submitHandler}>
                    <div className="signin-headContainer">
                        <h1 className="signin-title">{state.createAccount?"ایجاد حساب":"ورود"}</h1>       
                        <h2 className="signin-logo">سینما <span>آنلاین</span></h2>
                    </div>
                    {
                        errorState.wrongInfoError?
                        <small className="text-danger"> نام کاربری یا رمز عبور اشتباه است <i className="fa fa-exclamation-triangle" aria-hidden="true"></i></small>
                        :<></>
                    }
                    <div className="form-floating signin-input-container">
                        <input onChange={inputHandler.bind(this, "userName")} type="text" className="form-control form-input" placeholder='نام کاربری' />
                        <label htmlFor="floatingInput">نام کاربری</label>
                        <small className="text-danger">{errorState.userNameError}</small>
                    </div>
                    <div className="form-floating signin-input-container">
                        <input  onChange={inputHandler.bind(this, "password")} type="password" className="form-control form-input" placeholder="رمز عبور"/>
                        <label htmlFor="floatingInput">رمز عبور</label>
                        <small className="text-danger">{errorState.passwordError}</small>
                    </div>
                    {
                        state.createAccount?
                        <div className="form-floating signin-input-container">
                            <input onChange={inputHandler.bind(this, "phoneNumber")} type="number" className="form-control" placeholder="شماره تلفن"/>
                            <label htmlFor="floatingInput">شماره تلقن</label>
                            <small className="text-danger">{errorState.phoneError}</small>
                        </div>
                        :<></>
                    }
                    <button type='submit' className="btn signin-submit-btn">{state.createAccount? "ایجاد حساب":"ورود"}</button>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="signin-status-text" onClick={toggleLoginStatus}>{state.createAccount?"ورود به حساب کاربری" : "ساخت حساب جدید"}</span>
                        <span>
                        {
                            state.loading?
                            <Loading1/>:<></>
                        }
                        </span>
                    </div>
             
                </form>
                
            </div>
        </div>
    )
}


import React, { useState } from 'react';
import "../../css/signin.css"
import axios from "axios";
import {BASE_URL} from "../baseUrl";

export function SignIn() {

    const [state, setState] = useState({
        userName:"",
        password:"",
        phoneNumber:"",
        createAccount:false,
    });

    const [errorState, setErrorState]= useState({
        userNameError:"",
        passwordError:"",
        phoneError:"",
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
            if(state.createAccount)
            {
                const {createAccount, ...data} = state;
                console.log(data)
                axios.post("https://my-json-server.typicode.com/Re-Reza/entertainment-web/users",data)
                .then(response=>console.log(response))
                .catch(error=>console.log(error));
            }
            else{
                console.log("here")
                axios.get("https://my-json-server.typicode.com/Re-Reza/entertainment-web/users")
                .then(response=>console.log(response.data))
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
        //پیدا کردن راه بهتر
        return Object.keys(errorObj).length == 0 ? true : false;
    }

    //بوت استرپ راست به چپ
    return (
        <div className="signin-container">
            <div className="signin-box">
                <form id="signin-from" onSubmit={submitHandler}>
                    <h1 className="signin-title">{state.createAccount?"ایجاد حساب":"ورود"}</h1>
                    <div className="form-floating signin-input-container">
                        <input onChange={inputHandler.bind(this, "userName")} type="text" className="form-control" placeholder='نام کاربری' />
                        <label htmlFor="floatingInput">نام کاربری</label>
                        <small className="text-danger">{errorState.userNameError}</small>
                    </div>
                    <div className="form-floating signin-input-container">
                        <input  onChange={inputHandler.bind(this, "password")} type="password" className="form-control" placeholder="رمز عبور"/>
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
                    <button type='submit' className="btn btn-danger">{state.createAccount? "ایجاد حساب":"ورود"}</button>
                    <p className="signin-status-text" onClick={toggleLoginStatus}>{state.createAccount?"ورود به حساب کاربری" : "ساخت حساب جدید"}</p>
                </form>
                
            </div>
        </div>
    )
}
import React from 'react';

export function ChangeAccountInfo(props){

    const { password, phoneNumber, setUserInfo, userId, username, favoriteList} = props.userData
    const submitNewInfo = (event) =>{
        event.preventDefault();
        const nameInput = document.getElementById("usernameInput");
        const passwordInput = document.getElementById("passwordInput");
        const repeatPassword = document.getElementById("repeat-password-input");
        const phoneInput = document.getElementById("phoneInput");
        if( validate(nameInput, passwordInput, repeatPassword, phoneInput))
        {
            const newData = {
                userName: nameInput.value, 
                password: passwordInput.value,
                favoriteList,
                phoneNumber: phoneInput.value
            };

            fetch(`https://entertainment-web-db33a-default-rtdb.firebaseio.com/users/${userId}.json`,{
                method:"PUT",
                headers:{
                    "Content-Type": "application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify(newData)
            }).then(response => response.json().then(data=>{
                console.log(data)
                setUserInfo(newData);
            }));
        }
    }

    function validate(nameInput, passwordInput, repeatPassword, phoneInput){
        let isValid = false;
        if(nameInput.validity.valid && passwordInput.validity.valid && repeatPassword.validity.valid && phoneInput.validity.valid){
            
            if(repeatPassword.value == passwordInput.value)
            {
                isValid = true;
            }
            else{
                alert("رمز عبور و تکرار آن با تطابق ندارد");
            }
        }
        
        return isValid;
    }

    return(
        <section className="dashboard-changeAccountInfo">   
            <h2>تغییر مشخصات حساب</h2>
            <form id="changeUserInfo-form" noValidate onSubmit={submitNewInfo}>
                
                {/* <div>
                    <input id="img-input" type="file" />
                    <button onClick={()=>{
                        let imgInput = document.getElementById("img-input");
                        console.log(imgInput.value)
                    }}>send</button>
                </div> */}

                <div>
                    <label className="mb-3" htmlFor="usernameInput">تغییر نام کاربری</label>
                    <input required defaultValue={username} type="text" className="form-control" id="usernameInput" />
                </div>
                
                <div id="phone-container">
                    <label className="mb-3" htmlFor="phoneInput">تغییر شماره تلفن</label>
                    <input required defaultValue={phoneNumber}  type="number" className="form-control" id="phoneInput" />
                </div>

                <div id="password-container">
                    <label className="mb-3"  htmlFor="passwordInput">تغییر رمز عبور</label>
                    <input required minLength="4" defaultValue={password} type="password" className="form-control" id="passwordInput" />
                    <input required minLength="4" id="repeat-password-input" type="password" className="mt-4 form-control" placeholder='تکرار رمز عبور'/>
                </div>
                <button type="submit" className="btn btn-success">تایید مشخصات</button>
            
            </form>
        </section>
    )
}
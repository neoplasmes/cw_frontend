import React, { useEffect } from 'react';
import "../login/LoginPage.css";
import axios from '../../axios/axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

export const RegistrationPage = () => {
    const {auth} = useAuth();
    const redirectPath = useLocation().state?.from || "/";
    const navigate = useNavigate();

    const submitRegistration = () => {
        const usernameValue = document.getElementById("registrationUsernameInput").value;
        const passwordValue = document.getElementById("registrationPasswordInput").value;

        
        axios.post("/registration", JSON.stringify({username: usernameValue, password: passwordValue}), {
          headers: {"Content-Type":"application/json"},
        })
        .then((response) => {
          if(response.status === 201){
            navigate("/", {replace: true});
          }
        }); 
    }

    return (
      <>{auth.accessToken ? <Navigate to={"/"} replace={true}/> :
        <div className='loginPage-wrapper padding-global'>
            <div className='loginPage-form'>

                <h2>Регистрация</h2>

                <div className='loginPage-login'>
                  <input id="registrationUsernameInput" placeholder='Логин'/>
                </div>

                <div className='loginPage-password' >
                  <input id="registrationPasswordInput" placeholder='Пароль'/>
                </div>

                <div className='loginPage-submit' onClick={submitRegistration}>Зарегистрироваться</div>   

            </div>
        </div>}
      </>
    );
}


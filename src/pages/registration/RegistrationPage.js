import React, { useEffect } from 'react';
import "../login/LoginPage.css";
import axios from '../../axios/axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const RegistrationPage = () => {
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
        <div className='regPage-wrapper '>
            <div className='regPage-form'>
                <h2>Регистрация</h2>
               <div className='regPage-user'>
                <input id="registrationUsernameInput" placeholder='Логин'/>
                </div>
                <div className='regPage-password' >
                <input id="registrationPasswordInput" placeholder='Пароль'/>
                </div>
                <div className='loginForm-submit' onClick={submitRegistration}>Зарегистрироваться</div>
                
            </div>
                <img className='regPage-img' src="http://localhost:3500/media/courses/photography/loginfon.jpg" alt="фон"/>
        </div>
    );
}


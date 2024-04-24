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
        <div className='loginPage-wrapper margin-global'>
            <div className='loginPage-form'>
                <h2>LoginPage</h2>
                <input id="registrationUsernameInput"/>
                <input id="registrationPasswordInput"/>
                <div className='loginForm-submit' onClick={submitRegistration}>Зарегистрироваться</div>
            </div>
        </div>
    );
}


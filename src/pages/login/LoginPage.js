import React, { useEffect } from 'react'
import "./LoginPage.css"
import axios from '../../axios/axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

export const LoginPage = () => {
    const { auth, setAuth } = useAuth();

    const redirectPath = useLocation().state?.from || "/";
    const navigate = useNavigate();

    const submitLogin = async () => {
        const usernameValue = document.getElementById("loginUsernameInput").value;
        const passwordValue = document.getElementById("loginPasswordInput").value;

        try{
            const res = await axios.post("/login",
            JSON.stringify({username: usernameValue, password: passwordValue}), {
              headers: {"Content-Type":"application/json"},
              withCredentials: true
            }); 

            if(res.status === 200){
                console.log(res);
                setAuth({
                    username: usernameValue,
                    accessToken: res.data.accessToken
                });
                localStorage.setItem("username", usernameValue);
                navigate(redirectPath, {replace: true});
            }
        } catch (error){
            
        }
    }

    return (
    <>{
        !auth.accessToken ?
        <div className='loginPage-wrapper margin-global'>
            <div className='loginPage-form'>
                <h2>LoginPage</h2>
                <input id="loginUsernameInput"/>
                <input id="loginPasswordInput"/>
                <div className='loginForm-submit' onClick={submitLogin}>Войти</div>
            </div>
        </div> : <Navigate to="/" replace={true}/>

    }</>
    );
}

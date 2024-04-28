import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../axios/axios';


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({
    accessToken: null
  });
  const [tryingToAuthorizeAutomatically, setTryingToAuthorizeAutomatically] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    axios.get("/refresh", {signal: controller.signal, withCredentials: true})
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
        setAuth({accessToken: response.data.accessToken});
      }
    })
    .catch((error) => {console.log(error)})
    .finally(() => {setTryingToAuthorizeAutomatically(false)});

    return () => {
      controller.abort();
    }
  }, [])

  
  return (
    <AuthContext.Provider value={{auth, setAuth, tryingToAuthorizeAutomatically}}>
      {children}
    </AuthContext.Provider>
  )
}

//hook для минимизации количества импортов. вместо import AuthContext и import useContext нужно писать просто "import {useAuth}"
export const useAuth = () => {
  return useContext(AuthContext);
}


//компонент, который не пустит на страницы, для которых нужна авторизация
export const AuthorizedOnly = ({children}) => {
  const {auth} = useAuth();

  useEffect(() => {
    console.log(auth);
  })

  return (
    !auth.accessToken ? <Navigate to="/login" state={{from: window.location.pathname}} replace={true}/> : <>{children}</>
  );
}
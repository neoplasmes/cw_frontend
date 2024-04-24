import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({
    accessToken: null
  });

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
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
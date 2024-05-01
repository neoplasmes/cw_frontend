import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios, { protectedAxios } from '../axios/axios';


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({
    accessToken: null
  });
  const [tryingToAuthorizeAutomatically, setTryingToAuthorizeAutomatically] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    //Автоматический релогин при обновлении страницы
    //Благодаря компоненту AuthorizedOnly с accessToken === null ничего страшного произойти вообще не должно.
    const controller = new AbortController();

    //рефреш используется пока что ДВАЖДЫ. возможно, стоит сделать хук на рефреш
    axios.get("/refresh", {signal: controller.signal, withCredentials: true})
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
        setAuth({accessToken: response.data.accessToken});
      }
    })
    .catch((error) => {console.log(error)})
    .finally(() => {setTryingToAuthorizeAutomatically(false)});

    //Все protectedAxios исползуются исключительно внутри компонентов, обёрнутых AuthorizedOnly
    //Мб тогда перенести их в этот компонент?
    //создаём перехватчики на protectedAxios для автоматического добавления заголовка Authorization и обновления аксес токена
    const addAuthorizationHeader = protectedAxios.interceptors.request.use(
      (config) => {
        if(!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer + ${auth.accessToken}`;
        }
        console.log("auto header works");

        return config;
      },
      (error) => {return Promise.reject(error)}
    );

    const refreshOnForbidden = protectedAxios.interceptors.response.use(
      //Это обработчик нормальных ситуацих из диапазона 2хх, нам на него насрать
      response => response,
      //Обработчик ошибок
      (async (error) => {
        console.log("interceptor works");
        //этот error.config - по сути весь конфиг, который заивается в объект прототипа Axios
        const originalRequest = error.config;

        if (error.response.status === 403 && !originalRequest.sent) {
          try{
            const refreshResponse = await axios.get("/refresh", {signal: controller.signal, withCredentials: true});
            const newAccessToken = refreshResponse.data.accessToken;

            //.sent - кастомное поле, необходимое для того, чтобы не попасть в бесконечный цикл
            //а почему мы туда попадаем я хз. Наверное потому что если новый аксес токен будет говно, то эта функция так и будет вечно себя вызывать
            originalRequest.sent = true;

            originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
            setAuth({accessToken: newAccessToken});
            //Возвращаем новый модифицированный запрос
            return protectedAxios(originalRequest);
          } catch (tokenError) {
            //Сюда попадаем, если не получается обновить аксес токен
            console.log(tokenError);
            navigate("/login", {state: {from: window.location.pathname}});
            return Promise.reject(error);
          }
        } else {
          //Дропаем стандартную ошибку, если это не 403
          return Promise.reject(error);
        }
      })
    )

    return () => {
      protectedAxios.interceptors.request.eject(addAuthorizationHeader);
      protectedAxios.interceptors.response.eject(refreshOnForbidden);
      controller.abort();
    }
  }, [])

  
  return (
    <AuthContext.Provider value={{auth, setAuth, tryingToAuthorizeAutomatically}}>
      {tryingToAuthorizeAutomatically ? <div>loading</div> : children}
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
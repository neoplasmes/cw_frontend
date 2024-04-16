import React,{useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import './index.css';



const Main = () => {
  useEffect(() => {
    //как делать пост-запрос
    /*fetch("http://localhost:3500/register",{
      method:"POST",
      body: JSON.stringify({
        user:"Nikita",
        pwd: "1234",
      }),
      headers:{
        "Content-type":"application/json"
      }

    }).then(response => response.json()).then(json => console.log(json)).catch(error=>console.log(error));*/

  },[]);

  return (
    <BrowserRouter>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);

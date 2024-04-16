import React from 'react';
import {BrowserRouter, Routes, Route, Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import Footer from './Components/Footer/Footer';
import HomePage from './pages/home/page';
import { CoursePage } from './pages/courses/CoursePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    ),
    children:[
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/courses",
        element: <CoursePage/>
      }
    ]
  }
]);


  /*useEffect(() => {
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
/*
  },[]);*/



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);

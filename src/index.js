import React from 'react';
import {createBrowserRouter, RouterProvider, useParams} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './Components/Footer/Footer';
import HomePage from './pages/home/HomePage';
import { CoursePage } from './pages/education/CoursePage';
import { Photography } from './pages/education/photography/Photography';
import { ErrorPage } from './pages/ErrorPage';
import { LoginPage } from './pages/login/LoginPage';
import { RegistrationPage } from './pages/registration/RegistrationPage';
import { Layout } from './Layout';
import { AuthorizedOnly } from './context/AuthProvider';
import { AnotherCourse } from './pages/education/another/AnotherCourse';

const coursesPaths = {
  course_1: <AnotherCourse />,
  course_2: <AnotherCourse />,
  history: <AnotherCourse />,
  photography: <Photography />
}

const Course = () => {
  const {courseName} = useParams();

  return coursesPaths[courseName];
}

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    /*errorElement: <ErrorPage />,*/
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/education",
        element: <CoursePage/>
      },
      {
        path: "/education/:courseName",
        element: ( 
          <AuthorizedOnly>
            <Course />
          </AuthorizedOnly>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/registration",
        element: <RegistrationPage />
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

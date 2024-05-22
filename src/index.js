import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './Components/Footer/Footer';
import HomePage from './pages/home/HomePage';
import { EducationPage } from './pages/education/EducationPage';
import { ErrorPage } from './pages/ErrorPage';
import { LoginPage } from './pages/login/LoginPage';
import { RegistrationPage } from './pages/registration/RegistrationPage';
import { Layout } from './Layout';
import { AuthorizedOnly } from './context/AuthProvider';
import { CourseTemplate } from './pages/education/CourseTemplate';
import { ChapterTemplate } from './pages/education/ChapterTemplate';
import { TestTemplate } from './pages/education/TestTemplate';

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/education",
        element: <EducationPage/>
      },
      {
        path: "/education/:course",
        //Вот эта штука никуда не пустит без авторизации. Вообще никуда дальше /education
        element: ( 
          <AuthorizedOnly>
            <CourseTemplate />
          </AuthorizedOnly>
        ),
        children: [
          {
            path: ":chapter",
            element: <ChapterTemplate />
          },
          {
            path: ":chapter/test",
            element: <TestTemplate />
          }
        ]
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

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);

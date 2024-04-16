import React from 'react';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import Footer from './Components/Footer/Footer';
import HomePage from './pages/home/page';

const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const Main = () => {
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

  return (
    <BrowserRouter basename = "/home">
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<HomePage />}/>
          <Route path='courses'/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

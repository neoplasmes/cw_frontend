import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import './index.css';


const Main = () => {


  return (
    <Navbar />
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);

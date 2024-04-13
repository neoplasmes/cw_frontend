import React,{useEffect} from 'react';
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
    fetch("http://localhost:3500/login",{
      method:"POST",
      body: JSON.stringify({
        user:"Nikita",
        pwd: "1234",
      }),
      headers:{
        "Content-type":"application/json"
      }

    }).then(response => response.json()).then(json => console.log(json)).catch(error=>console.log(error));

  },[]);

  return (
    <Navbar />
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);

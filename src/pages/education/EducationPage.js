import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import "./EducationPage.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const server = "http://localhost:3500"

export const EducationPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
      const controller = new AbortController();

      //поменять на withCredentials + в бэкэнде сделать обработку по рефреш токену
      const getCourses = async () => {
        const response = await axios.get("/courses", {
          signal: controller.signal,
          withCredentials: true
        }).catch(err => console.log(err));
        
        //console.log(response);
        if (response && response.status === 200){
          setCourses(response.data);
        }
      }
      
      getCourses();
      

      return () => {
        controller.abort();
      }
  },[])

  return (
    <div className='education-wrapper'>
      <img className='educationFon' src="http://localhost:3500/media/courses/photography/loginfon.jpg" alt="fon"/>
        {courses.map((course, i) => {
          return (<CourseItem key={i} {...course}/>);
        })}
    </div>
  )
}

const CourseItem = (props) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const accentName = props.media_path + "-course-accent";

  useEffect(() => {
    const accent = document.querySelector("#" + accentName);
    if(accent) accent.style.width = `${props.progress}%`;
  }, [])

  return(
    <div className='education-item' onClick={() => {
      navigate(`/education/${props.media_path}`);
    }}>
      <h2>{props.course_name}</h2>
      <div className='education-item-image'>
        <img  src={`${server}/media/courses/${props.media_path}/itemCover.jpg`}/>
      </div>
      <p className='education-item-description'>{props.description}</p>
      {/*Здесь важно наличие самого аксес токена, но не его срок годности, ибо если у нас есть хотя какой то аксес токен, то то уже значит, что мы авторизовались через рефреш*/}
      {(!(props.progress === undefined) && auth.accessToken) ? 
      <div className='education-item-progress'>
        <div className='education-item-progress-accent' id={accentName}/>
      </div> :
      <div className='education-item-invitation'>Войдите в систему и приступайте к занятиям!</div>
      }
    </div>
  );
}
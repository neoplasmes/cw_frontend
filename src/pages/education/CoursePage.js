import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import "./CoursePage.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const server = "http://localhost:3500"

export const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const { auth, tryingToAuthorizeAutomatically } = useAuth();

  useEffect(()=>{
      const controller = new AbortController();

      const getCourses = async () => {
        const response = await axios.get("/courses", {
          signal: controller.signal,
          headers: {
            ...(auth.accessToken && {Authorization: `Bearer ${auth.accessToken}`}),
          }
        }).catch(err => console.log(err));
        
        //console.log(response);
        if (response && response.status === 200){
          setCourses(response.data);
        }
      }

      if (!tryingToAuthorizeAutomatically) {
        getCourses();
      }

      return () => {
        controller.abort();
      }
  },[tryingToAuthorizeAutomatically])

  return (
    <div className='education-wrapper'>
        {courses.map((course, i) => {
          return (<CourseItem key={i} {...course}/>);
        })}
    </div>
  )
}

const CourseItem = (props) => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  return(
    <div className='education-item' onClick={() => {
      navigate(`/education/${props.media_path}`);
    }}>
      <h2>{props.course_name}</h2>
      <div className='education-item-image'>
        <img  src={`${server}/media/courses/${props.media_path}/itemCover.jpg`}/>
      </div>
      <p className='education-item-description'>{props.description}</p>
      
      {(!(props.progress === undefined) && auth.accessToken) ? 
      <div className='education-item-progress'>

      </div> :
      <div className='education-item-invite'>Войдите в систему и приступайте к занятиям!</div>
      }
    </div>
  );
}
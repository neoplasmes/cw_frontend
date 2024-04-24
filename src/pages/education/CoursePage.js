import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import "./CoursePage.css";
import { useNavigate } from 'react-router-dom';

const server = "http://localhost:3500"

export const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    const controller = new AbortController();

    const getCourses = async () => {
      const response = await axios.get("/courses", {
        signal: controller.signal
      }).catch(err => console.log(err));
      
      //console.log(response);
      if (response.status === 200){
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
        {courses.map((course, i) => {
          return (<CourseItem key={i} name={course.course_name} description={course.description}/>);
        })}
    </div>
  )
}

const CourseItem = (props) => {
  const navigate = useNavigate();


  return(
    <div className='education-item' onClick={() => {
      navigate(`/education/${props.name}`);
    }}>
      <h2>{props.name}</h2>
      <div className='education-item-image'>
        <img  src={`${server}/media/courses/${props.name}/itemCover.jpg`}/>
      </div>
      <p className='education-item-description'>{props.description}</p>
      <div className='education-item-progress'>
        <div className='education-item-progress-accent'></div>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import "./CoursePage.css";

const server = "http://localhost:3500"

export const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    const controller = new AbortController();

    const getCourses = async () => {
      const response = await axios.get("/courses", {
        signal: controller.signal
      });
      
      console.log(response);
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


    <section className='education-wrapper margin-global'>
        {courses.map((course, i) => {
          return (<CourseItem key={i} name={course.course_name}/>);
        })}
    </section>
  )
}

const CourseItem = (props) => {

  return(
    <div className='education-item'>
      <h2>{props.name}</h2>
      <div className='education-item-image'>
        <img src={`http://localhost:3500/media/courses/${props.name}/itemCover.jpg`}/>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';



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

      return () => {
        controller.abort();
      }
    }


    getCourses();
  },[])

  return (
    <div className='courses-wrapper margin-global'>
        {courses.map((c) => {
          return (<div key={c.id}>{c.course_name}</div>);
        })}
    </div>
  )
}

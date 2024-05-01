import { useOutletContext, useParams, Navigate } from 'react-router-dom';
import { chaptersMap } from './chaptersMap';
import { useEffect } from 'react';


export const ChapterTemplate = () => {
    const {course, chapter} = useParams();
    const thisChapter = chaptersMap[course] && chaptersMap[course][chapter];

    //если такой главы не существует, то редиректим на едукатион
    if(!thisChapter) {
      return (
        <Navigate to={"/education"}/>
      )
    }

    //если всё норм, то всё норм
    return(
      <>
        {course} {chapter} 
        {chaptersMap[course][chapter].element}
      </>
    )
}

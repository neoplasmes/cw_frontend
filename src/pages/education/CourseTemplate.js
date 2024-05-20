import React, { useEffect, useState } from 'react';
import "./CourseTemplate.css";
import { useNavigate, NavLink, Outlet, useParams} from 'react-router-dom';
import axios from '../../axios/axios';
import { useAuth } from '../../context/AuthProvider';
import { chaptersMap } from './chaptersMap';


const ChapterLink = (props) => {
    const {media_path, chapter_name} = props;

    return(
        <li className="chapter-item">
            <NavLink to={media_path}>
                {chapter_name}
            </NavLink>
        </li>
    );
}

export const CourseTemplate = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const { course, chapter } = useParams();

    const [chapters, setChapters] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    //определяем, есть ли тест у главы
    //Засовываем в try/catch, потому что по плохим запросам там будет trying to read properties of undefinded
    //Если главы не существует, то тоже будет false, что удовлетворяет требованиям программы
    let hasTest;
    try {
        if(chaptersMap[course][chapter].test) hasTest = true;
    } catch (error) {
        hasTest = false;
    }

    useEffect(() => {
        let isAlive = true;//переменная, указывающая, находится ли компонент в дом дереве
        const controller = new AbortController();

        const getChapters = async () => {
            try {
                //Заменить на обычный axios with credentials
                const response = await axios.get(`courses/${course}`, {
                    signal: controller.signal,
                    withCredentials: true
                });

                console.log(response.data)
                isAlive && setChapters(response.data);
            } 
            catch (exception) {
                console.log(exception);
            }
            finally {
                setIsLoaded(true);
            }
        }
        
        getChapters();

        return () => {
            isAlive = false;
            controller.abort();
        }
        
    }, []);
    
    return (
        <div className='course-wrapper padding-global'>
            {isLoaded ? 
            <>
                <nav className='course-navigation'>
                <ul className='course-chapters-group'>
                        <li className='go-back' onClick={() => {navigate("/education");}}> go back </li>
                        {chapters.map((chapter, i) => {
                            return <ChapterLink key = {i} {...chapter}/>
                        })}
                    </ul>
                </nav> 
                <div className='chapter-wrapper'>
                    {hasTest && 
                    <div className='chapter-switch'>
                        <NavLink to={`/education/${course}/${chapter}`} end>Глава</NavLink>
                        <NavLink to={`/education/${course}/${chapter}/test`}>Тест</NavLink>
                    </div>}
                    <div className='chapter-scroll'>
                        <Outlet/>
                    </div>
                </div>
            </> :
            <div>loading</div>
            }
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import "./CourseTemplate.css";
import { useNavigate, NavLink, Outlet, useParams} from 'react-router-dom';
import axios from '../../axios/axios';
import { chaptersMap } from './chaptersMap';


const ChapterLink = (props) => {
    const {media_path, chapter_name, progress, has_test} = props;
    

    return(
        <li className="chapter-item">
            <NavLink to={media_path}>
                {chapter_name}
                {has_test && 
                <div>
                    Последний результат: <span style={{fontWeight: 800}}>{progress}%</span>
                </div>}
            </NavLink>
        </li>
    );
}

export const CourseTemplate = () => {
    const navigate = useNavigate();
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
                const response = await axios.get(`courses/${course}`, {
                    signal: controller.signal,
                    withCredentials: true
                });

                //console.log(response.data)
                isAlive && setChapters(response.data);
                //console.log(chapters);
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

    //функция по которой на клиенте обновится прогресс соответствущей главы
    const updateChapterProgressOnClient = (media_path, newProgress) => {
        let updatedChapter = chapters.find((chapter) => chapter.media_path === media_path);
        updatedChapter.progress = newProgress;

        let newData = [...chapters];
        newData[updatedChapter.order_id - 1] = updatedChapter;

        setChapters(newData);
    }

    return (
        <div className='course-wrapper padding-global'>
            {isLoaded ? 
            <>
                <nav className='course-navigation'>
                    
                    <ul className='course-chapters-group'>
                        <li className='go-back' onClick={() => {navigate("/education");}}> go back </li>
                        {chapters.map((chapter, i) => {
                            return <ChapterLink key = {i} {...chapter} />
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
                        <Outlet context={{updateChapterProgressOnClient}}/>
                    </div>
                </div>
            </> :
            <div>loading</div>
            }
        </div>
    )
}





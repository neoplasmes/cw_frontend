import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import "./TestTemplate.css"
import { chaptersMap } from './chaptersMap';
import {protectedAxios} from '../../axios/axios';
import { useAuth } from '../../context/AuthProvider';
/*
    
*/
export const TestTemplate = () => {
    const {course, chapter} = useParams();
    const [testCompleted, setTestCompleted] = useState(false);
    const [field, setField] = useState(null);
    const questionsRefs = useRef([]);

    let componentIsAlive = true;//переменная, указывающая, находится ли компонент в дом дереве
    const controller = new AbortController();

    let questions;
    try {
        questions = chaptersMap[course][chapter].test;
    } catch {
        questions = null;
    }

    //убивает запрос когда компонент удаляется из дерева
    useEffect(() => {
        return () => {
            componentIsAlive = false;
            controller.abort();
        }
    }, [])

    //Проверки, на случай, если какой-нибудь идиот решит ввести education/dsdgsdg/sdgsdgsdg/sdgsdgsdg/sdgsdgsdg
    if (questions === undefined || questions === null) {
        if (Object.keys(chaptersMap).includes(course)) {
            if (Object.keys(chaptersMap[course]).includes(chapter)){
                return (<div>Теста нет</div>);
            }
            return <Navigate to={`/education/${course}`}/>
        }

        return (<Navigate to={`/education`}/>)
    }

    const updateOnResult = (result) => {
        for (let i = 0; i < result.length; i++){
            questionsRefs.current[i].classList.remove("examination-unit-correct");
            questionsRefs.current[i].classList.remove("examination-unit-wrong");
            const resultedStyle = result[i] === 1 ? "examination-unit-correct" : "examination-unit-wrong";
            questionsRefs.current[i].classList.add(resultedStyle);
        }

        setTestCompleted(true);
    }

    const submitTest = async () => {
        //Формирование строки ответов
        let answers = [];
        for (let i = 0; i < questions.length; i++) {
            const questionFields = document.querySelectorAll(`input[name='${course}_${chapter}_question_${i+1}']`);
            
            let thisAnswer = null;
            for (let field of questionFields){
                if (field.checked) {
                    thisAnswer = field.value;
                    break;
                }
            }

            answers.push(thisAnswer);
        }

        //Проверка, все ли ответы указаны
        let smthWrong = false;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === null) {
                //Если нет, то помечаем
                questionsRefs.current[i].classList.add("examination-unit-unchecked");
                smthWrong = true;
            } 
        }

        //Если каких-то ответов нет, то пишем об этом и выкидываем из функции
        if (smthWrong) {
            setField("Вы ответили не на все вопросы!");
            return;
        } else {
            setField(null);
        }

        //Если всё нормально, то
        try {
            //Данный запрос делаем через axios для accessToken'ов
            const result = await protectedAxios.post("/examination",
            JSON.stringify({
                coursePath: course,
                chapterPath: chapter,
                answers: answers.join("")
            }),
            {
                signal: controller.signal,
                headers: {
                    "Content-Type": "application/json",
                }
            });

            console.log(result);
            setField(`Ваш результат: ${result.data.correct} правильных ответа из ${result.data.total}`);
            updateOnResult(result.data.result);
        } catch (exception){
            console.log(exception);
            setField(exception.response.data.reason);
        }  
    }

    return (
        <div className='examination'>
            {componentIsAlive && questions.map((question, questionNumber) => {
                return(
                    <div className='examination-unit' key={questionNumber} ref={(element) => (questionsRefs.current[questionNumber] = element)}>
                        <p>{`${questionNumber+1}. ${question.text}`}</p>
                        <div className='examination-unit-answers'>
                            {question.answers.map((answer, answerNumber) => {
                                return (
                                    <label key={answerNumber}>
                                        <input type='radio' 
                                        name={`${course}_${chapter}_question_${questionNumber+1}`} 
                                        value={answerNumber+1} 
                                        onChange={() => {questionsRefs.current[questionNumber].classList.remove("examination-unit-unchecked");}}
                                        />
                                        {answer}
                                    </label>
                                )   
                            })}
                        </ div>
                    </div>
                );
            })}
            <div className='examination-note'>
                {field}
            </div>
            {!testCompleted && <button className="examination-submit" onClick={submitTest}>Завершить</button>}
        </div>
    )
}
import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'

/* components */
import { QuestionsCounter } from '../../components/QuestionsCounter/QuestionsCounter';
import {Questions} from '../../components/Questions/Questions'
import {NavButtons} from '../../components/NavButtons/NavButtons.js'

/* Utils and css */
import {questionsArray as questions} from '../../util/questions'
import './questions.css';
import '../../assets/css/root.css'

/* assets */
import { ReactComponent as Blob1 } from '../../assets/images/blobs/blob1.svg';
import { ReactComponent as Blob2 } from '../../assets/images/blobs/blob3.svg';
import { ReactComponent as Blob3 } from '../../assets/images/blobs/blob2.svg';



export const QuestionsPage = (props) => {
    const [counter, setCounter] = useState(0);
    const [question, setQuestion] = useState('');
    const [usedQuestions, setUsedQuestions] = useState([]);

    useEffect(() => {
        setQuestion('Préparez-vous pour la première question!');
    }, [])

    const handleCounter = () => setCounter(counter + 1);

    const handleNextQuestion = () => {
        let nextQuestion = 0;
        while (usedQuestions.length < questions.length) {
            nextQuestion = Math.floor(Math.random()*questions.length);
            if (usedQuestions.includes(questions[nextQuestion].id)) {
                continue;
            } else {
                break;
            }
        }

        if (usedQuestions.length === questions.length) {
            setQuestion('Plus aucune question');
        } else {
            setQuestion(questions[nextQuestion].question);
            handleCounter();
            setUsedQuestions((prev) => [questions[nextQuestion].id, ...prev]);
        }
    }

    return (
        <div className='questions-container'>
                <QuestionsCounter counter={counter}/>
            <div className='question-text-container'>
                <Questions question={question}/>
            </div>
            <NavButtons buttonOne={'menu'} 
                        buttonOneAction={'/'}
                        buttonTwo={'suivante'}
                        buttonTwoAction={handleNextQuestion}
                         />
            <Blob1 className='blobs' id='blob1'/>
            <Blob2 className='blobs' id='blob2'/>
            <Blob3 className='blobs' id='blob3'/>
        </div>
    )
}
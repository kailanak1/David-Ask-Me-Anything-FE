import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 

import {getQuestions, deleteQuestion} from '../actions/questionAction';

import AnswerForm from './AnswerForm'; 
import PointsForm from './PointsForm'; 

import Card from 'react-bootstrap/Card';

const QuestionList = ({questions, getQuestions, deleteQuestion}) => {
    
    useEffect(() => {
        getQuestions();
     
    }, [])

    const handleDeleteSubmit = (id) => {
        deleteQuestion(id)
    }
    
    
    const renderQuestions = () => {
    if(questions.length !== 0 && questions.length !== undefined){
        return questions.map(question => {
            return (
                <Card key={question.coin}>
                    <Card.Header></Card.Header>
                    <Card.Title>
                    <h4>{question.title}</h4>
                    </Card.Title>
                    <Card.Body>
                    {question.context}
                    {question.points}
                    <br></br>
                    <div className="answer">
                     {question.answers.map(answer =>{
                            return (answer.content)
                        })}
                        {!!localStorage.getItem("user") ?
                            <div>
                                 <AnswerForm question_id={question.id}/>
                                 <PointsForm question_id={question.id} />
                                 <br/>
                                <button onClick={() => handleDeleteSubmit(question.id)}>Delete this question</button>
                            </div>
               
                 : null}
                    </div>
                  
                    </Card.Body>
              </Card>
            )
        })
    } else {
       return  <h3>No questions yet. Try asking one.</h3>
    }
    }


    return(
        <div>
            {renderQuestions()}
        </div>
    )
}

const mapStateToProps = (store) => {
    return {questions: store.questions}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => getQuestions().then(dispatch),
        deleteQuestion: (id) => deleteQuestion(id).then(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
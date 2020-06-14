import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 

import {getQuestions, deleteQuestion} from '../actions/questionAction';

import AnswerForm from './AnswerForm'; 
import PointsForm from './PointsForm'; 

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const QuestionList = ({questions, getQuestions, deleteQuestion}) => {
    
    useEffect(() => {
        getQuestions();
     
    }, [])

    const[show, setShow] = useState(false)
    const[id, setId] = useState("")

    const handleClose = () => {
        setShow(false)
    }

    const handleClick = (id) => {
        setShow(true)
        setId(id)
    }

    const deleteThisQuestion = () => {
        deleteQuestion(id)
        setShow(false)
        setId("")
    }
    
    
    const renderQuestions = () => {
    if(questions.length !== 0 && questions.length !== undefined){
        return questions.map(question => {
            return (
                <Card key={question.id}>
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
                                <button onClick={() => handleClick(question.id)}>Delete this question</button>
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
             <Modal show ={show} onHide={handleClose}>
                <Modal.Body>
                    <h1>Are you sure you want to delete this question?</h1>
                    <Button variant="primary" onClick={deleteThisQuestion}>Delete Question</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Body>
            </Modal>

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
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 

import { getQuestions } from '../actions/questionAction';
import { addQuestion } from '../actions/questionAction';
import { updateQuestion } from '../actions/questionAction';
import { deleteQuestion } from '../actions/questionAction';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import AnswerForm from './AnswerForm'



const AskMeAnything = ({ questions, getQuestions, addQuestion, updateQuestion, deleteQuestion }) => {
    

    useEffect(() => {
        getQuestions();
     
    }, [])

    const [title, setTitle] = useState('')
    const [context, setContext] = useState('')
    const [points, setPoints] = useState('')


    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleContextChange = e => {
        setContext(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addQuestion(title, context)
    }

    const handlePointsChange = (e, points) => {
        setPoints(points, e.target.value)
    }

    const handlePointsSubmit = (e, id) => {
        updateQuestion(points, id)
    }
    
    const handleDeleteSubmit = (id) => {
        console.log("testing delete")
        console.log(id)
        deleteQuestion(id)
    }
    
    // const handleAnswerChange = (e) => {
    //     setAnswer(e.target.value)
    // }

    // const handleAnswerSubmit = (answer, id) => {
    //     answerQuestion(answer, id)
    // }

    
    // const renderAnswers = () => {
    //     if(questions.length !==0){
    //         return questions.questions.answers.map(answer => {
    //             return (
    //                 <Card key = 
    //             )
    //         })
    //     }
    // }


    const renderQuestions = () => {
        if(questions.length !== 0){
            return questions.map(question => {
                return (
           
                    <Card key={question.id} id={question.id} >
                        <Card.Header></Card.Header>
                        <Card.Title>
                        <h4>{question.title}</h4>
                        </Card.Title>
                        <Card.Body>
                        {question.context}
                        <br></br>
                         {question.answers.map(answer =>{
                                return (answer.content)
                            })}
                            {!!localStorage.getItem("user") ?
                                <div>
                                     <AnswerForm question_id={question.id}/>
                                    <button onClick={() => handleDeleteSubmit(question.id)}>Delete this question</button>
                                </div>
                   
                     : null}
                      
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
             <h2>Ask Away</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Ask a question</Form.Label>
                    <br />
                    <input
                    type="text"
                    placeholder="Write a question"
                    onChange={handleTitleChange}
                    value={title}
                    ></input>
                    <br />
                    <Form.Label>Question context</Form.Label>
                    <br />
                    <input
                    type="textarea"
                    placeholder="Give me some background info"
                    onChange={handleContextChange}
                    value={context}
                    ></input>
                    <br />
                    <input type="submit" className="btn btn-secondary"></input>
                    <br />
                 
                </Form>
               
               {renderQuestions()}
            </div>
        )


};

const mapStateToProps = (store) => {
    return {questions: store.questions}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => getQuestions().then(dispatch),
        addQuestion: (title, context) => addQuestion(title, context).then(dispatch),
        updateQuestion: (points, id) => updateQuestion(points, id).then(dispatch), 
        deleteQuestion: (id) => deleteQuestion(id).then(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskMeAnything)
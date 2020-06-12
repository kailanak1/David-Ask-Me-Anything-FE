import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 
import cuid from 'cuid';

import { addQuestion } from '../actions/questionAction';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import QuestionList from './QuestionList';



const AskMeAnything = ({ addQuestion }) => {
    
    
    const [title, setTitle] = useState('')
    const [context, setContext] = useState('')
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }
   

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleContextChange = e => {
        setContext(e.target.value)
    }
    

    const handleSubmit = e => {
        e.preventDefault()
        let coin = cuid()
        addQuestion(title, context, coin)
        setContext("")
        setTitle("")
        handleShow()
    }

 

        return(
            <div>
                <Modal show ={show} onHide={handleClose}>
                <Modal.Body>
                    <h1>Code: {}</h1>
                    <p>Write this code down to unlock rewards. Check back later see how many point it earns!</p>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Body>
                </Modal>

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
               
              <QuestionList/>
            </div>
        )
};



const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (title, context, coin) => addQuestion(title, context, coin).then(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AskMeAnything)
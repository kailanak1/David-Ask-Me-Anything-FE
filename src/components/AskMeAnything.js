import React, {useState } from 'react';
import { connect } from 'react-redux'; 
import cuid from 'cuid';

import { addQuestion } from '../actions/questionAction';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import QuestionList from './QuestionList';


const textareastyle = {
    padding: "9px", 
    boxSizing: "border-box", 
    fontSize: "15px", 
    minHeight: "100px",
    minWidth: "250px", 
    borderRadius: "10px"
}



const AskMeAnything = ({ addQuestion }) => {
    
    
    const [title, setTitle] = useState('')
    const [context, setContext] = useState('')
    const [show, setShow] = useState(false)
    const [coin, setCoin] = useState('')


    const handleClose1 = () => {
        setShow(false);
        addQuestion(title, context, coin)
        setContext("")
        setTitle("")
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
        setCoin(cuid())
        if(title.length !== 0 || title===" "){
            handleShow()
        } else {
            window.alert("Please write something in the question field.")
        }
    
    }

 

        return(
            <div>
                <Modal show ={show} onHide={handleClose1}>
                <Modal.Body>
                    <h4>Code: {coin}</h4>
                    <p>Write this code down to unlock rewards. Check back later see how many points it earns!</p>
                    <Button variant="secondary" onClick={handleClose1}>Close</Button>
                </Modal.Body>
                </Modal>

             <h2>Ask Away</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Ask a question</Form.Label>
                    <br />
                    <input
                    type="text"
                    style={textareastyle}
                    placeholder="Write a question"
                    onChange={handleTitleChange}
                    value={title}
                    ></input>
                    <br />
                    <Form.Label>Question context</Form.Label>
                    <br />
                    <input
                    type="textarea"
                    style={textareastyle}
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
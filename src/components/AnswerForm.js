import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { answerQuestion } from '../actions/answerAction';
import { connect } from 'react-redux'; 


const AnswerForm = ({answerQuestion, question_id}) => {

    const [answer, setAnswer] = useState('');

    const handleAnswerChange = (e) => {
        console.log(e.target.value)
        setAnswer(e.target.value)
    };

    const handleAnswerSubmit = (e) => {
        console.log(answer, question_id)
        e.preventDefault(e)
        answerQuestion(answer, question_id)
        setAnswer("")
    }

    return (
        <Form onSubmit={handleAnswerSubmit}>
        <input
           
            placeholder="answer here"
           
            value={answer}
            onChange={ (e) => handleAnswerChange(e)}
        />
        <input type="submit"></input>
    
    </Form>
    )



}



const mapDispatchToProps = (dispatch) => {
    return {
        answerQuestion: (answer, id) => answerQuestion(answer, id).then(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AnswerForm)
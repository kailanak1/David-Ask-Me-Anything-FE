import React, {useState } from 'react';
import Form from 'react-bootstrap/Form';
import { updateQuestion } from '../actions/questionAction';
import { connect } from 'react-redux'; 


const PointsForm = ({updateQuestion, question_id}) => {

    const [points, setPoints] = useState('');

    const handlePointsChange = (e) => {
        setPoints(e.target.value)
    };

    const handlePointsSubmit = (e) => {
        e.preventDefault()
        if(points >= 0 && points <= 1000){
            updateQuestion(question_id, points)
            setPoints("")
        } else {
            window.alert("Points must be between 0 and 1000")
        }
    }

    return (
        <Form onSubmit={handlePointsSubmit}>
        <input
            placeholder="points here"
            type="number"
            value={points}
            onChange={ (e) => handlePointsChange(e)}
        />
        <input type="submit"></input>
    
    </Form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuestion: (id, points) => updateQuestion(id, points).then(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(PointsForm)
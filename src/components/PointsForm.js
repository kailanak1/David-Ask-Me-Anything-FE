import React, { useEffect, useState } from 'react';
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
        updateQuestion(question_id, points)
        setPoints("")
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
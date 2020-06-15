import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

import {getQuestions} from '../actions/questionAction';

import { Form } from 'react-bootstrap';



const WineList = ({questions}) => {

    const [coin, setCoin] = useState('');

    const list = () => {
        return(
            <div>
                <li>Montes Alpha</li>
                <li>GSMs</li>
                <li>Monesai</li>
            </div>
        )
    }

    const handleChange = (e) => {
        setCoin(e.target.value)
        
    }

    // const renderList = (points) => {
    //     points
    //     for(i=0; i < points; i++){
    //         render
    //     }
    // }

    const renderForm = () => {
        return(
        <Form onSubmit={handleSubmit}>
            Code:<input
            value={coin}
            onChange= {(e)=> handleChange(e)}
            ></input>
            <input type="submit"></input>
        </Form>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCoin("")
    }



   


    return(

        <div>
                   { console.log(questions)}
            {renderForm()}
            {list()}
            <br />
            <Link to='/AskMeAnything'>Go Back</Link>
        </div>
        
    )
}

const mapStateToProps = (store) => {
    return {questions: store.questions}
}


export default connect(mapStateToProps, null)(WineList)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

import {getQuestions} from '../actions/questionAction';

import { Form } from 'react-bootstrap';



const WineList = ({questions}) => {

    const [coin, setCoin] = useState("");
    const [point, setPoint] = useState(0);   
    const [usedCoins, setUsedCoins] = useState([])

    const revealWines = () => {
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
        validateCoin(coin)
        setCoin("")
    }

    const validateCoin = (coin) => {
        const found = questions.find(q => q.coin === coin)
        if(found){
            setUsedCoins(found)
            // make array 
            // push coin into array 
            // check that coin has not been used yet
            setPoint(found.points + point)
           
        } else {
            window.alert("That code does not exist")
        }
    }


   


    return(

        <div>
            { console.log(questions)}
            {renderForm()}
            <br />
            Your Points: {point}
            <br />
            {point >= 10 ? <li>Montes Alpha</li> : null}
            {point >= 20 ? <li>GSMs</li> : null}
            <Link to='/AskMeAnything'>Go Back</Link>
        </div>
        
    )
}

const mapStateToProps = (store) => {
    return {questions: store.questions}
}




export default connect(mapStateToProps, null)(WineList)
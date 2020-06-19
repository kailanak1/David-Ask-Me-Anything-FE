import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getQuestions } from '../actions/questionAction';

import { Form } from 'react-bootstrap';


const WineList = ({questions, getQuestions}) => {

    useEffect(() => {
        getQuestions();
     
    }, [])

    const [coin, setCoin] = useState([]);
    const [point, setPoint] = useState(0);   
    const [usedCoins, setUsedCoins] = useState([])


    const handleChange = (e) => {
        setCoin(e.target.value) 
    }

    const addCoins = (newCoin) => {
        setCoin(coin.concat(newCoin))
    }

    const renderInput = () => {
        {console.log("clicked")}
            return (
        
                    <input 
                    value={()=>addCoins(coin)}
                    onChange={(e)=> handleChange(e)}
                    ></input>
             
            )
    }



    const renderForm = () => {
        return(
            <div>
            <Form onSubmit={handleSubmit}>
                Code:  {renderInput()}
                <input type="submit"></input>
            </Form>
            <br />
            <button onClick={addCoins}>Add More Codes</button>
         </div>
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
            setUsedCoins(usedCoins.concat(found.coin))
            const currentCoin = usedCoins.find(c => c === coin)
         if(!currentCoin){
            setPoint(found.points + point)
         } else {
             window.alert("You have already entered that code.")
         } 
        } else {
            window.alert("That code does not exist.")
        }
    }


    return(

        <div>
            {renderForm()}
            <br />
            Your Points: {point}
            <br />
            {point >= 10 ? <li>Montes Alpha</li> : null}
            {point >= 20 ? <li>GSMs</li> : null}
            {point >= 30 ? <li>Zebra Wine</li> : null}
            {point >= 40 ? <li>Moone Tsai</li>: null}
            {point >= 50 ? <li>Barbed Wire</li>: null}
            {point >= 60 ? <li>Angelica Nicole</li>: null}
            {point >= 70 ? <li>Earthquake</li>: null}
            <Link to='/AskMeAnything'>Go Back</Link>
        </div>
        
    )
}

const mapStateToProps = (store) => {
    return {questions: store.questions}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => getQuestions().then(dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(WineList)
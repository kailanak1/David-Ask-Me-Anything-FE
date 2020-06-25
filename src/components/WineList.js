import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import {getQuestions} from '../actions/questionAction';

import { Form } from 'react-bootstrap';



const WineList = ({questions, getQuestions}) => {

    useEffect(() => {
        getQuestions();
     
    }, [])

    const [coin, setCoin] = useState("");
    const [point, setPoint] = useState(0);   
    const [usedCoins, setUsedCoins] = useState([])


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
            Redeem your points for a list of David's wine recommendations.
            {point >= 10 ? <li><a href="https://www.monteswines.com/en/wines/montes-alpha/cabernet-sauvignon">Montes Alpha</a></li> : null}
            {point >= 20 ? <li><a href="https://localstastingroom.com/what-is-a-gsm-wine/#:~:text=GSM%20are%20the%20initials%20for,Grenache%2C%20Syrah%2C%20and%20Mourvedre.&text=More%20syrah%2C%20and%20you%20will,use%20more%20syrah%20than%20grenache.">GSMs</a></li> : null}
            {point >= 30 ? <li><a href="https://www.lagranja360.com/">Lagranja</a></li> : null}
            {point >= 40 ? <li><a href="https://www.moonetsai.com/">Moone Tsai</a></li>: null}
            {point >= 50 ? <li><a href="https://www.tfewines.com/our-brands/barbed-wire/">Barbed Wire</a></li>: null}
            {point >= 60 ? <li><a href="https://www.alexandrianicolecellars.com/">Angelica Nicole</a></li>: null}
            {point >= 70 ? <li><a href="https://michaeldavidwinery.com/wines/">Earthquake</a></li>: null}
            {point >= 80 ? <li><a href="http://www.tenshenwines.com/">Tenshen</a></li>: null}
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
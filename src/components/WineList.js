import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

import { Form } from 'react-bootstrap';



const WineList = ({questions}) => {

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




export default connect(mapStateToProps, null)(WineList)
import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { getQuestions } from '../actions/questionAction'
import Card from 'react-bootstrap/Card'



const AskMeAnything = ({ getQuestions }) => {

    
    useEffect(() => {
        getQuestions();
    }, [])
 
        return(
            <div>
                Questions here
                <form>
                    <input></input>
                </form>

                
            
            </div>
        )


};

const mapStateToProps = (store) => {
    return {questions: store.questions}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => getQuestions().then(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskMeAnything)
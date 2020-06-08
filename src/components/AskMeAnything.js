import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { getQuestions } from '../actions/questionAction'
import Card from 'react-bootstrap/Card'



const AskMeAnything = ({ questions,getQuestions }) => {
    
  

    useEffect(() => {
        getQuestions();
    }, [])


    const renderQuestions = () => {
        if(questions.length !== 0){
            return questions.questions.map(question => {
                return (
                    <Card key={question.id} >
                        <Card.Header></Card.Header>
                        <Card.Title>
                        <h4>{question.title}</h4>
                        </Card.Title>
                        <Card.Body>
                        {question.context}
                        </Card.Body>
                  </Card>
                )
            })
        } else {
           return  <h3>No questions yet. Try asking one.</h3>
        }
       
    }

        return(
            <div>
                Questions here
                <form>
                    <label>Ask a question</label>
                    <input></input>
                    <label>Context</label>
                    <input></input>
                </form>
               {renderQuestions()}
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
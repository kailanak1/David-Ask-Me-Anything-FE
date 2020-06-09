import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 
import { getQuestions } from '../actions/questionAction';
import { addQuestion } from '../actions/questionAction';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';



const AskMeAnything = ({ questions,getQuestions, addQuestion }) => {
    

    useEffect(() => {
        getQuestions();
     
    }, [])

    const [title, setTitle] = useState('')
    const [context, setContext] = useState('')
    const [points, setPoints] = useState('')

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleContextChange = e => {
        setContext(e.target.value)
    }

    const handleSubmit = e => {
        addQuestion(title, context)
    }

    


    const renderQuestions = () => {
        console.log(questions)
        if(questions.length !== 0){
            return questions.questions.map(question => {
                return (
                    <Card key={question.id} id={question.id} >
                        <Card.Header></Card.Header>
                        <Card.Title>
                        <h4>{question.title}</h4>
                        </Card.Title>
                        <Card.Body>
                        {question.context}
                       <footer>
                           <Form>
                       <button>+</button>
                        <button>-</button>
                        {question.points}
                        <button>Save Changes</button>
                        </Form>
                       </footer>
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
             <h2>Ask Away</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Ask a question</Form.Label>
                    <br />
                    <input
                    type="text"
                    placeholder="Write a question"
                    onChange={handleTitleChange}
                    value={title}
                    ></input>
                    <br />
                    <Form.Label>Question context</Form.Label>
                    <br />
                    <input
                    type="textarea"
                    placeholder="Give me some background info"
                    onChange={handleContextChange}
                    value={context}
                    ></input>
                    <br />
                    <input type="submit" className="btn btn-secondary"></input>
                    <br />
                 
                </Form>
               {renderQuestions()}
            </div>
        )


};

const mapStateToProps = (store) => {
    return {questions: store.questions}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => getQuestions().then(dispatch),
        addQuestion: (title, context) => addQuestion(title, context).then(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskMeAnything)
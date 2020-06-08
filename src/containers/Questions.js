import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

import { getQuestions } from '../actions/questions';

class Questions extends Component {

    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.questions.length != this.props.questions.length) {
        return true
      } else {
        return false
      }
    }

  render() {
    const renderQuestions = this.props.questions.map(question => 
      <Card key={question.id}>
        <Card.Header></Card.Header>
        <Card.Title>
          <h4>{question.title}</h4>
        </Card.Title>
        <Card.Body>
          {question.context}
        </Card.Body>
      </Card>
    );
    
    return (
        <div>
          {renderQuestions}
        </div>
    );  
  }  
}

const mapStateToProps = (state) => {
  return ({
    questions: state.questions
  })
}

export default connect(mapStateToProps, { getQuestions })(Questions);
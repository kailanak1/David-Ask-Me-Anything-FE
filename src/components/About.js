import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export default class About extends React.Component{

  
    render(){
        return(
          
                <Container>
                    <Row>
                        <Col >
                            <Figure.Image
                            src={`${process.env.PUBLIC_URL}/assets/david-pic.jpg`} rounded
                            alt="David" />
                        </Col>
                        <Col style={{"height":"440px"}} >
                            <div style={{"height":"220px"}}> <a href="https://www.linkedin.com/in/david-d-589521b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> <a href="https://github.com/eckdd" target="_blank" rel="noopener noreferrer">Github</a>   </div>
                            <div style={{"height":"220px"}}> Hi. I'm David. I enjoy photography, wine, and computers. </div>
                        </Col>
                       
                    </Row>
                </Container>
            
        )
    };
};



  
import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
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
                        
                     
                        <Col style={{"height":"667px"}} >
                            <div style={{"height":"335px"}}> <a href="https://www.linkedin.com/in/david-d-589521b/" target="_blank">LinkedIn</a> Facebook Whatever </div>
                            <div style={{"height":"335px"}}> Hi. I'm David.  </div>
                        </Col>
                       
                    </Row>
                </Container>
            
        )
    };
};


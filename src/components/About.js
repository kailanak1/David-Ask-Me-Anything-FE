import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';




export default class About extends React.Component{



    render(){
        return(
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image 
                            src={`${process.env.PUBLIC_URL}/assets/david-pic.jpg`} rounded
                            alt="David" />
                        </Col>
                        
                     
                        <Col md={6} md={4}>
                             Hi. This is my About page. 
                        </Col>
                       
                    </Row>
                </Container>
            </div>
        )
    };
};
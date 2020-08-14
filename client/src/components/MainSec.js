import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainSec(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 style={{color:'#5cb85c'}} className="display-1 font-weight-bolder ">{props.title}</h1> }
                        { props.subTitle && <h3 style={{color:'#bfbfbf'}} className="display-4 noBack font-weight-light">{props.subTitle}</h3> }
                        { props.eMail && <a href= "mailto:Nathan_Huber@Yahoo.com" style={{color:'#bfbfbf', textDecoration: 'none'}} className="display-4 noBack font-weight-light">{props.eMail}</a> }
                        { props.text && <h3 style={{color:'#bfbfbf'}} className="lead font-weight-light">{props.text}</h3> }
                        { props.text2 && <h3 style={{color:'#bfbfbf'}} className="lead font-weight-light">{props.text2}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default MainSec ;
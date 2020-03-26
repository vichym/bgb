import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
class Chatrooms extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="bg-info clearfix" style={{ padding: '.5rem' }} >.col-3</Col>
                    <Col className="bg-warning clearfix" style={{ padding: '.5rem' }} >.col-auto - variable width content</Col>
                    <Col className="bg-danger clearfix w-100" style={{ padding: '.5rem' }} sm >.col-3</Col>
                </Row>
                <Row fluid={true}>
                    <Col className="bg-primary clearfix" sm >Column</Col>
                    <Col className="bg-danger clearfix" sm >Column</Col>
                    <Col className="bg-info clearfix" xs>Column</Col>
                </Row>

            </Container>
        );
    }
}

export default Chatrooms;
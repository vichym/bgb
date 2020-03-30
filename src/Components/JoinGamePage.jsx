import React from 'react';
import Layout from '../Layout/Layout';
import { Button, Row, Col, Input } from 'reactstrap';
const JoinGamePage = (props)=> {
    return (
        <Layout color1 = 'rgba(125, 238, 242, 1)' color2 = 'rgba(249, 193, 79, 1)' >
        
            <Row>
                <Col>
                    <h3 className="d-flex justify-content-center " style={{ fontSize: '1.5rem' }}>Enter Game Code</h3>
                </Col>
            </Row>
            <Row >
                <Col className="mx-auto col-9 col-sm-6 col-md-6 col-lg-8 col-xl-8 m-2">
                    <Input type="text" name="username" id="username" placeholder="Enter Game Code !" />
                </Col>
            </Row>
            <Row >
                <Col className="mx-auto col-9 col-sm-6 col-md-6 col-lg-8 col-xl-8 ">
                    <Button className="w-100" color="success" to="/gamerooms">Join</Button>
                </Col>
            </Row>
        </Layout>
    );
}

export default JoinGamePage;
/* credit : https://www.hawatel.com/blog/handle-window-resize-in-react/ */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Input, Row, Col } from 'reactstrap';
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom';
import logo from '../Logo/BGB.png'
import { Media } from 'reactstrap';


const LoginPage = (props) => {

    return (
        <Layout color='rgba(249, 193, 79, 1)'>
            <Card body inverse color="danger" className='  col-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 '>
                <Row>
                    <Col>
                        <Media left top width="50" className="rounded mx-auto d-block" src={logo} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="d-flex justify-content-center " style={{ fontSize: '2rem' }}>Chat APP</h3>
                    </Col>
                </Row>
                <Row >
                    <Col className="mx-auto col-9 col-sm-6 col-md-6 col-lg-8 col-xl-8 m-2">
                        <Input  type="text" name="username" id="username" placeholder="Enter Your Name !" />
                    </Col>
                </Row>
                <Row >
                    <Col className="mx-auto col-9 col-sm-6 col-md-6 col-lg-8 col-xl-8 ">
                        <Button className="w-100" color="success" tag={Link} to="/gamerooms">Join</Button>
                    </Col>
                </Row>
            </Card>
        </Layout>
    );

}
export default LoginPage
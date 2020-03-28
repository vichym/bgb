/* credit : https://www.hawatel.com/blog/handle-window-resize-in-react/ */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardTitle, Input, Row, Col } from 'reactstrap';
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom';
import logo from '../Logo/BGB.png'
const LoginPage = (props) => {

    return (
        <Layout color='rgba(249, 193, 79, 1)'>
            <Card body inverse color="danger" className=' col-8 col-sm-8 col-md-6 col-lg-4 col-xl-3 '>
                <Row>
                    <Col sm={12} className="justify-center">
                        <img src={logo} width='50px' height='50px' alt='logo'/>
                    </Col>
                    <Col>
                        <CardTitle className="d-flex justify-content-center bg-success" style={{ fontSize: '2rem' }}>Chat APP</CardTitle>
                    </Col>
                </Row>
                <Input type="text" name="username" id="username" placeholder="Enter Your Name !" />
                <Button color="secondary" tag={Link} to="/gamerooms">Join</Button>
            </Card>
        </Layout>
    );

}
export default LoginPage
/* credit : https://www.hawatel.com/blog/handle-window-resize-in-react/ */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Row, Col } from 'reactstrap';
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'; import Context from '../Context';

const LoginPageWithoutContext = (props) => {

    const { app } = props.context
    
    const handleChange = (e) => {
        /* Set update username by setState App.js */
        app.setState({ username: e.target.value })
    }

    return (
        <Layout color1='rgba(249, 193, 79, 1)' color2='rgba(61, 180, 255, 1)' classNames='col-10 col-sm-10 col-md-6 col-lg-4 col-xl-3' >
            <Row>
                <Col>
                    <h3 className="d-flex justify-content-center " style={{ fontSize: '2rem' }}>Chat APP</h3>
                </Col>
            </Row>
            <Row >
                <Col className="mx-auto col-9 col-sm-6 col-md-6 col-lg-8 col-xl-8">
                    <Input className="m-1" type="text" name="username" onChange={handleChange} id="username" placeholder="Enter Your Name !" />
                    <Button className="w-100 m-1" color="success" disabled={!app.state.username} tag={Link} to='/welcome'>Join</Button>
                </Col>
            </Row>
        </Layout>
    );

}

const LoginPage = () => {
    return (
        <Context.Consumer>
            {(value) =>
                <LoginPageWithoutContext context={value} />
            }
        </Context.Consumer>
    )
}
export default LoginPage
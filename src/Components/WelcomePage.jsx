import React from 'react';
import Layout from '../Layout/Layout';
import { Card, Button, Row, Col } from 'reactstrap';
import logo from '../Logo/BGB.png'
import Context from '../Context';
import { Media } from 'reactstrap';

function WelcomePageWithoutContext(props) {
    console.log(props.context)
    return (
        <Layout color='rgba(125, 238, 242, 1)'>
            <Card body inverse color="danger" className='  col-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 '>
                <Row>
                    <Col>
                        <Media left top width="50" className="rounded mx-auto d-block" src={logo} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="d-flex justify-content-center ">Welcome, {props.context.state.username}!</h3>
                    </Col>
                </Row>
                <Row >
                    <Col className=" ">
                        <Button className="w-100" color="primary" to="/gamerooms">Join</Button>
                    </Col>
                    <Col className="  ">
                        <Button className="w-100" color="success" to="/gamerooms">Create</Button>
                    </Col>
                </Row>
            </Card>
        </Layout>
    );
}

const WelcomePage = () => {
    return (
        <Context.Consumer>
            {
                context =>
                    <WelcomePageWithoutContext context={context} />
            }
        </Context.Consumer>
    )
}
export default WelcomePage;
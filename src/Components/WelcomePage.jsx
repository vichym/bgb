import React from 'react';
import Layout from './Layout';
import { Button, Row, Col } from 'reactstrap';
import Context from '../Context';
import { Link } from 'react-router-dom';


const WelcomePageWithoutContext = (props) => {
    console.log(props.context)
    return (
        <Layout color1='rgba(125, 238, 242, 1)' color2='rgba(249, 193, 79, 1)' classNames='col-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex' >
            <Row className=" d-flex justify-content-center align-items-center mx-auto">
                    <h3 className="justify-content-center d-inline-flex" >Welcome,&nbsp;  </h3>
                    <h3 className="d-inline-flex justify-content-center ">{props.context.app.state.username}!</h3>
            </Row>
            <Row >
                <Col className=" ">
                    <Button className="w-100" color="primary" tag={Link} to='/joingame'>Join</Button>
                </Col>
                <Col className="  ">
                    <Button className="w-100" color="success" tag={Link} to='/creategame'>Create</Button>
                </Col>
            </Row>
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
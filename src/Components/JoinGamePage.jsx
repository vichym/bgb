import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { Button, Row, Col, Input, Modal, ModalBody } from 'reactstrap';
import Context from '../Context';
import { url } from '../socket'
import axios from 'axios'
import { useHistory } from "react-router-dom";


const JoinGamePageWithoutContext = (props) => {

    /* Declare a new state variable for modal */
    const [openModal, setOpenModal] = useState(true);
    const toggle = () => setOpenModal(!openModal);

    /* Utilize context from App.js */
    const { app } = props.context
    const { gameCode } = app.state

    /* Initialize history for redirecting route */
    const history = useHistory()


    /* Set update username but setState App.js and */
    const handleChange = (e) => {
        app.setState({ gameCode: e.target.value })
    }

    /* Check if the Game exist in Database */
    const handleSubmit = async () => {
        axios({
            method: "GET",
            url: url,
            headers: {
                "Content-Type": "application/json"
            },
            crossdomain: true,
            params: { "gameCode": gameCode }
        })
            .catch(
                /* Check for Error */
                err => console.error(err))
            .then(
                /* redirct page to Dashboard or show error modal  */
                res => {
                    if (!res.data.message) {
                        history.push("/dashboard");
                    } else {
                        return setOpenModal(true)
                    }
                })
    }

    return (

        <Layout color1='rgba(125, 238, 242, 1)' color2='rgba(61, 180, 255, 1)' classNames='col-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 ' >
            <Row>
                <Col>
                    <h3 className="d-flex justify-content-center " style={{ fontSize: '1.5rem' }}>Enter Game Code</h3>
                </Col>
            </Row>
            <Row >
                <Col className="mx-auto col-9 col-sm-6 col-md-6 col-lg-8 col-xl-8 m-2">
                    <Input className="m-1 " type="text" name="gameCode" onChange={handleChange} id="gameCode" placeholder="Enter Game Code !" />
                    <Button className="w-100 m-1" color="success" disabled={!app.state.gameCode} onClick={handleSubmit} >Join</Button>
                </Col>
            </Row>
            <Modal centered size={'sm'} isOpen={openModal} toggle={toggle} >
                <ModalBody className="text-center">
                    <h4>
                        <b>Game Not Found</b>
                    </h4>
                    <p>Please double check your code</p>
                    <Button color="primary" onClick={toggle}>Okay</Button>
                </ModalBody>
            </Modal>
        </Layout>
    );
}

const JoinGamePage = () => {
    return (
        <Context.Consumer>
            {value =>
                <JoinGamePageWithoutContext context={value} />
            }
        </Context.Consumer>
    )
}

export default JoinGamePage;
import React, { useState } from 'react';
import Layout from '../Layout';
import { Button, Row, Col, Input } from 'reactstrap';
import Context from '../../Context';
import socket, { url } from '../../socket'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import InfoModal from './Modal';


const JoinGamePageWithoutContext = (props) => {

    /* Utilize context from App.js */
    const { app } = props.context
    const { gameCode, username } = app.state

    /* Initialize history for redirecting route */
    const history = useHistory()

    const [codeErrorModal, setCodeErrorModal] = useState(false);
    const [joinErrorModal, setJoinErrorModal] = useState(false);


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
            params: {
                "username":username,
                "gameCode": gameCode
            }
        })
            .catch(
                /* Check for Error */
                err => console.error(err))
            .then(
                /* redirct page to Dashboard or show error modal  */
                res => {
                    /* if the game is found */
                    if (res.data) {
                            history.push("/dashboard")
                    }
                    /* If game not found */
                    else {
                        return setCodeErrorModal(true)
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
            {
                /* Show Info Modal if join fail */
                joinErrorModal && <InfoModal
                    msg="There is an error joining the game room. Please try again"
                    title="Join Room Failed"
                    toggle={() => setJoinErrorModal(false)}
                    isOpen={joinErrorModal}
                />
            }
            {
                /* Show Info Modal if code error */
                codeErrorModal && <InfoModal
                    msg="There is game found! Please Check your code."
                    title="Game Not Found"
                    toggle={() => setCodeErrorModal(false)}
                    isOpen={codeErrorModal} />
            }
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
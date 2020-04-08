import React, { Component } from 'react';
import TopBar from './TopBar';
import { Row, Col, Container } from 'reactstrap';
import Context from '../../Context';
import PlayerProfileComponent from './PlayerProfileComponent';
import TransactionComponent from './TransactionComponent';
import Log from './Log';
import socket from '../../socket'
class DashboardPageWithoutContect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            asset: [],
            log: []
        }
    }

    componentDidMount() {
        socket.on("init_game_data",
            ({ message, data }) => {
                this.setState({ asset: data.asset, players: data.players, log: data.log })
                console.log("Socket.on init_game_data")
            })
        socket.on("message", (message) => {
            this.setState({ log: [...this.state.log, message] })
        })

    }

    render() {
        const { username, gameCode } = this.props.context.app.state
        return (
            <div className="vh-100 bg-primary">
                <TopBar gameCode={gameCode} />
                <Container fluid>
                    <Row className=" justify-content-center d-flex">
                        <Col className=" col-12 col-md-5 p-1 align-items-stretch justify-content-center">
                            <PlayerProfileComponent className="m-1 align-items-stretch" asset={this.state.asset} username={username} />
                        </Col>
                        <Col className=" col-12 col-md-7 p-1 justify-content-center">
                            <TransactionComponent className="m-1" players={this.state.players} asset={this.state.asset} />
                            <Log className="m-1" log={this.state.log} />
                        </Col>
                    </Row>
                    
                </Container>

            </div>
        );
    }
}


const DashboardPage = () => {
    return (
        /* Utilize context value assigned in App.js */
        <Context.Consumer>
            {(value) =>
                <DashboardPageWithoutContect context={value} />
            }
        </Context.Consumer>
    );
};

export default DashboardPage;


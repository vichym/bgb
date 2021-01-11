import React, { Component } from 'react';
import TopBar from './TopBar';
import { Row, Col, Container } from 'reactstrap';
import Context from '../../Context';
import PlayerProfileComponent from './PlayerProfileComponent';
import TransactionComponent from './TransactionComponent';
import Log from './Log';
import socket from '../../socket'
import {withRouter} from 'react-router-dom'

class DashboardPageWithoutContect extends Component {

    constructor(props) {
        super(props)
        this.state = this.props.location.state
    }
    /*
     */
    componentDidMount() {
        /* Update player_list when a new player join */
        socket.on("update_player_list",
            ({ player_list , logs}) => {
                this.setState({
                    player_list: player_list,
                    logs:logs
                })
                console.log("Updated player_list", this.state.player_list)
                console.log("Updated logs", this.state.logs)
            })
        socket.on("logs", (message) => {
            this.setState({ logs: [...this.state.logs, message] })
        })
    }


    render() {
        const { username } = this.props.context.app.state
        return (
            <div className="vh-100 bg-primary">
                <TopBar gameCode={this.state.gameCode} />
                <Container fluid>
                    <Row className=" justify-content-center d-flex">
                        <Col className=" col-12 col-md-5 p-1 align-items-stretch justify-content-center">
                            <PlayerProfileComponent className="m-1 align-items-stretch"  username = {username} assets={this.state[username]} />
                        </Col>
                        <Col className=" col-12 col-md-7 p-1 justify-content-center">
                            <TransactionComponent className="m-1" players={this.state.player_list} assets={this.state.assets} />
                            <Log className="m-1" logs={this.state.logs} />
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}


const DashboardPage = (props) => {
    return (
        /* Utilize context value assigned in App.js */
        <Context.Consumer>
            {(value) =>
                <DashboardPageWithoutContect location={props.location} context={value} />
            }
        </Context.Consumer>
    );
};

export default withRouter(DashboardPage);
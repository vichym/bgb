import React, { Component, Fragment } from 'react';
import TopBar from './TopBar';
import { Row, Col, Container } from 'reactstrap';
import Context from '../../Context';
import PlayerProfileComponent from './PlayerProfileComponent';
import TransactionComponent from './TransactionComponent';
import Log from './Log';

class DashboardPageWithoutContect extends Component {

    state = {
        players: [
            { name: "Jonh" },
            { name: "Jackinson" },
            { name: "Jerk" },
            { name: "Jonh" },
            { name: "Jackinson" },
            { name: "Jerk" },
            { name: "Jonh" },
            { name: "Jackinson" },
            { name: "Jerk" },
        ],
        asset: [
            { name: "Gold", amount: 1000 },
            { name: "Silver", amount: 600 },
            { name: "Gold", amount: 1000 },

        ]
    }

    render() {
        const { username, gameCode, socket } = this.props.context.app.state
        return (
            <div class="vh-100 bg-primary">
                <TopBar gameCode={gameCode} />
                <Container fluid>
                    <Row className=" justify-content-center d-flex">
                        <Col className=" col-12 col-md-5 p-1 justify-content-center">
                            <PlayerProfileComponent className="m-1" asset={this.state.asset} username={username} />
                        </Col>
                        <Col className=" col-12 col-md-7 p-1 justify-content-center">
                            <TransactionComponent className="m-1" players={this.state.players} asset={this.state.asset} />
                            <Log className="m-1" />
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


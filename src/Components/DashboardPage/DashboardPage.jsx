import React, { Component, Fragment } from 'react';
import TopBar from '../NavBar';
import { Row, Col} from 'reactstrap';
import Context from '../../Context';
import PlayerProfileComponent from './PlayerProfileComponent';
import { route } from '../../Layout/RounteHandler'
import { Link } from 'react-router-dom';
import TransactionComponent from './TransactionComponent';

class DashboardPageWithoutContect extends Component {

    render() {
        const { username, asset, players } = this.props.context.state
        return (
            <Fragment>
                <Row className="align-items-center">
                    {route.map(r =>
                        <Col>
                            <Link to={r.path}>{r.name}</Link>
                        </Col>)}
                </Row>
                <TopBar />
                <Row className=" justify-content-center">
                    <Col className="bg-primary col-12 col-md-5 ">
                        <PlayerProfileComponent asset={asset} username={username}/>
                    </Col>
                    <Col className="bg-success col-12 col-md-7 p-2">
                        <TransactionComponent  players={players}/>
                    </Col>
                </Row>
                <Row className=" justify-content-center">
                    <Col className="bg-primary col-12 col-md-5">
                        f
                    </Col>
                    <Col className="bg-success col-12 col-md-7">
                        2
                    </Col>
                </Row>
            </Fragment>
        );
    }
}


const DashboardPage = () => {
    return (
        <Context.Consumer>
            {(value) =>
                <DashboardPageWithoutContect context={value} />
            }
        </Context.Consumer>
    );
};

export default DashboardPage;


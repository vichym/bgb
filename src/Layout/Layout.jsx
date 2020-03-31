
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Media, Row, Col } from 'reactstrap'
import logo from '../Logo/BGB.png'
import { route } from '../Layout/RounteHandler'
import { Link } from 'react-router-dom';
class Layout extends Component {

    constructor() {
        super();
        this.state = {
            height: '182px',
            classNames: 'card bg-danger'
        }
    }
    /**
     * Calculate & Update state of new dimensions
     */
    updateDimensions = () => {
        this.setState({ height: `${window.innerHeight}px` });
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {

        return (
            <div className="card" style={{ height: `${this.state.height}`, background: `${this.props.color1}` }}>
                {/* Debugging */}    
                <Row className="align-items-center">
                        {route.map(r => 
                            <Col>
                                <Link to={r.path}>{r.name}</Link>
                            </Col>)}
                </Row>
                {/* Debugging */}
                <div className="card-body row justify-content-center align-items-center">
                    <Card body inverse style={{ background: `${this.props.color2}` }} className=   {this.props.classNames}>
                        <Row>
                            <Col>
                                <Media left top width="50" className="rounded mx-auto d-block" src={logo} />
                            </Col>
                        </Row>
                        {this.props.children}
                    </Card>
                </div>
            </div>
        );
    }

}

export default Layout
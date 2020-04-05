
import React, { Component, memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Media, Row, Col } from 'reactstrap'
import logo from '../Logo/BGB.png'

class Layout extends Component {

    constructor() {
        super();
        this.state = {
            height: '',
            classNames: 'card bg-danger'
        }
    }


    render() {
        return (
            <div className=" row justify-content-center align-items-center vh-100 mx-auto" style={{ background: `${this.props.color1}` }}>
                <Card body inverse style={{ background: `${this.props.color2}` }} className={this.props.classNames}>
                    <Row>
                        <Col>
                            <Media left top width="50" className="rounded mx-auto d-block" src={logo} />
                        </Col>
                    </Row>
                    {this.props.children}
                </Card>
            </div>
        );
    }

}

export default memo(Layout)
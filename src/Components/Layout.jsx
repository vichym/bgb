
import React, { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Media, Row, Col } from 'reactstrap'
import logo from '../Logo/BGB.png'

const  Layout = (props) =>  {

        return (
            <div className=" row justify-content-center align-items-center vh-100 mx-auto" style={{ background: `${props.color1}` }}>
                <Card body inverse style={{ background: `${props.color2}` }} className={props.classNames}>
                    <Row>
                        <Col>
                            <Media left top width="50" className="rounded mx-auto d-block" src={logo} />
                        </Col>
                    </Row>
                    {props.children}
                </Card>
            </div>
        );

}

export default memo(Layout)
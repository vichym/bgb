import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';


function Log(props) {
    return (
        <Card className={props.className} >
            <CardHeader className="bg-danger">
                Log
            </CardHeader>
            <CardBody className=" justify-content-center bg-dark p-3">
                <div id="log-div" className="bg-white rounded container">
                    {/* For rendering all message */}
                    {props.log.map(msg =>
                            <div id="log-text">{msg.message}</div>
                    )}
                </div>
            </CardBody>
        </Card>
    );

}

export default Log;
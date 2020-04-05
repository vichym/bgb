import React from 'react';
import {  Card, CardBody, CardHeader } from 'reactstrap';

function Log(props) {
    return (
        <Card className={props.className} >
            <CardHeader className="bg-danger">
                Log
            </CardHeader>
            <CardBody className=" justify-content-center bg-dark p-3">
                <div className="bg-white h-100vh rounded" style={{height:"10vh"}}>
                    {/* For rendering all message */}

                </div>
            </CardBody>
        </Card>
    );
}

export default Log;
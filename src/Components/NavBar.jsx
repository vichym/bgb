import React, { memo} from 'react';
import {
    Navbar,
    Media,
    Badge
} from 'reactstrap';
import logo from '../Logo/BGB.png'

const TopBar = () => {
    return (
        <div>
            <Navbar className=" navbar-dark bg-dark row">
                <div className=" col col-12 col-md-8 d-flex justify-content-center justify-content-md-start align-items-center" >
                    <Media width="60" className="rounded d-block mx-1 p-1" src={logo} />
                    <h1 style={{}}>Chat APP</h1>
                </div>
                <div className=" col d-flex justify-content-center justify-content-md-end">
                    <h2><Badge className="justify-item-center ">Code : XG6GY</Badge> </h2>
                </div>
            </Navbar>
        </div>
    );
};

export default memo(TopBar);
import React, { memo } from 'react';
import { ListGroupItem, ListGroup, CardBody, CardHeader, Card } from 'reactstrap';


const PlayerProfileComponent = (props) => {
    const items = []

    /* Extract asset and username from props */
    const { asset, username } = props

    /* Generate List item of asset */
    asset.map(a =>
        items.push(
            <ListGroupItem className="justify-content-between d-flex align-items-center">
                <h6>{a.name}</h6>
                <h4><span className="badge badge-pill badge-success">{a.amount}</span></h4>
            </ListGroupItem>
        )
    )
    return (
        <Card className={props.className}>
            <CardHeader className="bg-danger">
                Asset
            </CardHeader>
            <CardBody className=" justify-content-center bg-dark p-3">
                <h3 className="flex-column text-center mb-3" style={{color:"gold"}}>{username}</h3>
                <ListGroup>
                    {items}
                </ListGroup>
            </CardBody>
        </Card>
    );
};

/* Use memo to check for change before rerender */
export default memo(PlayerProfileComponent);
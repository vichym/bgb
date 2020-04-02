import React, {memo} from 'react';
import { ListGroupItem, ListGroup, Row, Container } from 'reactstrap';

const PlayerProfileComponent = (props) => {
    const items = []
    const { asset, username} = props
    asset.map(a =>
        items.push(
            <ListGroupItem className="justify-content-between d-flex align-items-center">
                <h5>{a.name}</h5>
                <h3><span className="badge badge-pill badge-success">{a.amount}</span></h3>
            </ListGroupItem>
        )
    )
    return (
        <Container className="  m-2 rounded bg-warning p-2">
            <Row className="justify-content-center">
                <h3 className="flex-column justify-content-center">{username}</h3>
            </Row>
            <ListGroup>
                {items}
            </ListGroup>
        </Container>
    );
};

export default memo(PlayerProfileComponent);
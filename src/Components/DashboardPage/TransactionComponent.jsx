import React, { memo } from 'react';
import { ButtonGroup, Button, Card, CardHeader, CardBody } from 'reactstrap'
import { Component } from 'react';
import InputAmount from './InputAmount';

class PlayerListComponent extends Component {

    state = {
        recipient: "",
        amount: ""
    }

    players = this.props.players
    asset = this.props.asset

    /* Change the state in Dashboard Page onChange event*/
    onSetValue = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name, e.target.value)
    }

    /* Generate player buttons for transaction */
    rendPlayerList = () => {
        const items = []
        this.players.map(p =>
            items.push(
                <Button color="primary"
                    className="border border-success rounded p-1"
                    name="recipient"
                    value={p.name}
                    onClick={this.onSetValue}
                    active={this.state.recipient === p.name}>
                    {p.name}
                </Button>
            )
        )
        return items
    }

    /* Generate Assets buttons */
    rendAssetList = () => {
        const items = []
        this.asset.map(p =>
            items.push(
                <Button color="warning "
                    className="m-1 border border-danger rounded"
                    name="asset"
                    value={p.name}
                    onClick={this.onSetValue}
                    active={this.state.asset === p.name}>
                    {p.name}
                </Button>
            )
        )
        return items
    }
    render() {
        return (
            <Card className={this.props.className}>
                    <CardHeader className="bg-danger">
                        Transaction
                    </CardHeader>
                    <CardBody className="bg-dark d-flex flex-column stretch">
                        <ButtonGroup className="m-2 d-flex-wrap mx-auto p-2 flex-wrap">
                            {this.rendPlayerList()}
                        </ButtonGroup>
                        <ButtonGroup className=" d-flex flex-wrap">
                            {this.rendAssetList()}
                        </ButtonGroup>
                        <ButtonGroup className="m-2 d-flex p-2 ">
                            <Button className="align-self-stretch m-1 col" color="warning" name="action" value='req' onClick={this.onSetValue} active={this.state.action === 'req'}>Request</Button>
                            <Button className="align-self-stretch m-1 col" color="danger" name="action" value='send' onClick={this.onSetValue} active={this.state.action === 'send'}>Send</Button>
                        </ButtonGroup>
                        <InputAmount className="m-2 d-flex" updateValue={this.onSetValue} amount={this.state.amount} this={this} />
                        <Button className="p-2 mx-auto w-75" disabled={!(this.state.action && this.state.amount && this.state.asset && this.state.recipient)}>Process</Button>
                    </CardBody>
                </Card>
        )
    }

};

export default memo(PlayerListComponent);
import React, { memo } from 'react';
import { ButtonGroup, Button, Card, CardHeader, CardBody } from 'reactstrap'
import { Component } from 'react';
import InputAmount from './InputAmount';

class TransactionComponent extends Component {

    state = {
        recipient: "",
        amount: ""
    }

    /* Change the state in Dashboard Page onChange event*/
    onSetValue = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name, e.target.value)
    }


    /* Generate player buttons for transaction */
    rendPlayerList = () => {
        let players = this.props.players
        const items = []
        players.map(name =>
            items.push(
                <Button color="primary"
                    className="border m-1 border-success flex-grow-1 rounded p-1"
                    name="recipient"
                    value={name}
                    onClick={this.onSetValue}
                    active={this.state.recipient === name}>
                    {name}
                </Button>
            )
        )
        return items
    }

    /* Generate Assets buttons */
    rendAssetList = () => {
        let assets = this.props.assets
        const items = []
        for (var key in assets) {
            items.push(
                <Button color="warning "
                    className="m-1 border border-danger rounded"
                    name="assets"
                    value={key}
                    onClick={this.onSetValue}
                    active={this.state.assets === key}>
                    {key}
                </Button>
            )
        }
        return items
    }
    render() {
        return (
            <Card className={this.props.className}>
                <CardHeader className="bg-danger">
                    Transaction
                    </CardHeader>
                <CardBody className="bg-dark d-flex flex-column">
                    <ButtonGroup className="m-2 d-flex mx-auto p-2  flex-wrap">
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
                    <Button className="p-2 mx-auto w-75" disabled={!(this.state.action && this.state.amount && this.state.assets && this.state.recipient)}>Process</Button>
                </CardBody>
            </Card>
        )
    }

};

export default TransactionComponent;
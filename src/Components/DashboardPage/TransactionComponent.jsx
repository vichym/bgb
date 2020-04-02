import React, { memo } from 'react';
import { ButtonGroup, Button, Form, Input } from 'reactstrap'
import { Component } from 'react';
import InputAmount from './InputAmount';

class PlayerListComponent extends Component {

    state = {
        recipient: ""
    }

    players = this.props.players

    onSetValue = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name, e.target.value)
    }

    rendPlayerList = () => {
        const items = []
        this.players.map(p =>
            items.push(
                <Button color="primary" name="recipient" value={p.name} onClick={this.onSetValue} active={this.state.recipient === p.name}>{p.name}</Button>
            )
        )
        return items
    }
    render() {
        return (
            <Form default="">
                <ButtonGroup vertical>
                    {this.rendPlayerList()}
                </ButtonGroup>
                <ButtonGroup vertical>
                    <Button color="warning" name="action" value='req' onClick={this.onSetValue} active={this.state.action === 'req'}>Request</Button>
                    <Button color="danger" name="action" value='send' onClick={this.onSetValue} active={this.state.action === 'send'}>Send</Button>
                </ButtonGroup>
                <InputAmount />
            </Form>
        )
    }

};

export default memo(PlayerListComponent);
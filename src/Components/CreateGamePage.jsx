import React, { Component } from 'react';
import Layout from './Layout';
import { Button, Row, Col, Input } from 'reactstrap';
import { Form, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { url } from '../socket'
import Context from '../Context';
import axios from "axios"
import { Redirect , withRouter} from "react-router-dom"
class CreateGamePageWithoutContext extends Component {
    state = {
        assetNames: [],
        assets: {},
        nameHolder: ""
    }
    /* General on change handler for game name input, asset name input */
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    /* Take the name and value of asset frin Inpit and add it to Assets */
    onAssetValueChange = (e) => {
        /* Extract value from Input */
        let name = e.target.name
        let value = e.target.value

        /* Update element in Set */
        this.setState(prevState => ({
            assets: {
                ...prevState.assets,
                [name]: value
            }
        }))
    }

    /* update the name of asset and put in in a placeholder, only add complete name to array after submit  */
    onAddAssetChange = (e) => {
        this.setState({ nameHolder: e.target.value })
    }

    /* Add complete newly added name to assetNames array from rendering */
    handleAddAssetItem = () => {
        this.setState({ assetNames: [...this.state.assetNames, this.state.nameHolder] })
        this.setState({ nameHolder: "" })
    }

    /*  */
    handleSubmit = () => {
        // socket.emit("create_game", ({
        //     username: this.props.context.app.state.username,
        //     gameName: this.state.gameName,
        //     assets: this.state.assets
        // }))
        // socket.on("create_game_success", res =>  console.log(res))

        axios({
            method: "POST",
            url: url + "/api/creategame",
            headers: {
                "Content-Type": "application/json"
            },
            crossdomain: true,
            data: {
                username: this.props.context.app.state.username,
                gameName: "DATA2",
                assets: {
                    asset1: "ASSET1",
                    asset2: "ASSET2",
                    asset3: "ASSET3",
                }
            }
        })
            .catch(
                err => console.error(err))
            .then(
                res => {
                    console.log(res)
                    this.props.history.push({
                        pathname: '/dashboard',
                        state: res.data.ops[0]  // there is a string size limit of 640k characters that can be passed.
                                                // So extract only data about game
                    })
                })
    }


    renderAssetItem = () => {
        const items = []
        this.state.assetNames.forEach(asset => {
            items.push(
                <FormGroup row>
                    <Col>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" name={asset}>
                                <InputGroupText>{asset}</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Enter Initial Amount" type="number" name={asset} onChange={this.onAssetValueChange} />
                        </InputGroup>
                    </Col>
                </FormGroup>)
        })

        return (items)
    }

    render() {
        return (
            <Layout color1='rgba(125, 238, 242, 1)' color2='rgb(0, 238, 99)' classNames='col-10 col-sm-10 col-md-8 col-lg-8 col-xl-6 ' >
                <Row>
                    <Col>
                        <h3 className="d-flex justify-content-center align-center"
                            style={{ fontSize: '1.5rem' }}>
                            Game Information
                        </h3>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col sm >
                            <Row className="d-flex justify-content-center">
                                <FormGroup col className="mr-2">
                                    <Label for="gameName">Game Name</Label>
                                    <Input
                                        type="text"
                                        name="gameName"
                                        id="gameName"
                                        placeholder="Game Name"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm >
                            <Label >Asset</Label>
                            {this.renderAssetItem()}
                            <InputGroup>
                                <Input placeholder="Enter Asset name here" value={this.state.nameHolder} onChange={this.onAddAssetChange} />
                                <InputGroupAddon addonType="append">
                                    <Button color="success" onClick={this.handleAddAssetItem}>Enter</Button>
                                </InputGroupAddon>
                            </InputGroup>

                        </Col>
                    </Row>
                </Form>
                <Row className="pt-3">
                    <Col className="mx-auto col-12 col-sm-10 col-md-8 col-lg-5 col-xl-5 ">
                        <Button className="w-100" onClick={this.handleSubmit} style={{ background: 'rgba(61, 180, 255, 1)', border: 0 }}>Create</Button>
                    </Col>
                </Row>
            </Layout >
        )
    }
}

const CreateGamePage = (props) =>
    <Context.Consumer>{
        context => <CreateGamePageWithoutContext history={props.history} context={context} />
    }</Context.Consumer>
    ;
export default withRouter(CreateGamePage); 
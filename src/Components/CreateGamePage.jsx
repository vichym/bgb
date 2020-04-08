import React, { Component, Fragment } from 'react';
import Layout from './Layout';
import { Button, Row, Col, Input, FormText } from 'reactstrap';
import { Form, FormGroup, Label } from 'reactstrap';

class CreateGamePage extends Component {
    state = {
        assetCount: 1
    }


    addAssetItem = () => {
        this.setState({ assetCount: this.state.assetCount + 1 })
    }



    renderAssetItem = () => {
        const items = []
        for (var i = 0; i < this.state.assetCount; i++) {
            items.push(
                <FormGroup row>
                    <Col >
                        <Input type="text" name="asset" id="asset" placeholder="Name" />
                    </Col>
                    <FormText>:</FormText>
                    <Col >
                        <Input type="text" name="assentAmount" id="assentAmount" placeholder="Amount" />
                    </Col>
                </FormGroup>
            )
        }
        return (
            <Fragment>
                {items}
            </Fragment>
        )
    }

    render() {
        return (
            <Layout color1='rgba(125, 238, 242, 1)' color2='rgb(0, 238, 99)' classNames='col-10 col-sm-10 col-md-8 col-lg-8 col-xl-6 ' >
                <Row>
                    <Col>
                        <h3 className="d-flex justify-content-center align-center" style={{ fontSize: '1.5rem' }}>Game Information</h3>
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
                                    />
                                </FormGroup>
                                <FormGroup col>
                                    <Label for="numberPlayers">Max. Players</Label>
                                    <Input type="select" name="numberPlayers" id="numberPlayers">
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </Input>
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col sm >
                             <Label >Asset</Label>
                            {this.renderAssetItem()}
                            <Button onClick={this.addAssetItem}> Add Asset </Button>
                        </Col>
                    </Row>
                </Form>
                <Row className="pt-3">
                    <Col className="mx-auto col-12 col-sm-10 col-md-8 col-lg-5 col-xl-5 ">
                        <Button className="w-100" style={{ background: 'rgba(61, 180, 255, 1)', border: 0 }} to="/gamerooms">Create</Button>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default CreateGamePage;
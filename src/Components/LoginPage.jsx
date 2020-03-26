/* credit : https://www.hawatel.com/blog/handle-window-resize-in-react/ */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardTitle, Input } from 'reactstrap';

class LoginPage extends Component {

    constructor() {
        super();
        this.state = {
            height: '182px'
        }
    }
    /**
     * Calculate & Update state of new dimensions
     */
    updateDimensions() {
        this.setState({ height: `${window.innerHeight}px` });
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (
            <div class="card bg-warning " style={{ height: `${this.state.height}` }}>
                <div class="card-body row justify-content-center align-items-center bg-">
                    <Card body inverse color="danger"  className=' col-8 col-sm-8 col-md-6 col-lg-4 col-xl-3 '>
                        <CardTitle className="d-flex justify-content-center" style={{fontSize:'2rem'}}>Chat APP</CardTitle>
                        <Input type="text" name="username" id="username" placeholder="Enter Your Name !" />
                        <Button color="secondary">Join</Button>
                    </Card>
                </div>
            </div>
        );
    }
}
export default LoginPage
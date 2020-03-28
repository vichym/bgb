
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Layout extends Component {

    constructor() {
        super();
        this.state = {
            height: '182px', 
            classNames : 'card bg-danger'
        }
    }
    /**
     * Calculate & Update state of new dimensions
     */
    updateDimensions = () =>  {
        this.setState({ height: `${window.innerHeight}px` });
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    } 

    render() {
        
        return (
            <div class="card" style={{ height: `${this.state.height}`,background: `${this.props.color}`}}>
                <div class="card-body row justify-content-center align-items-center bg-">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Layout
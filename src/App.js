import React, { Fragment, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context'
import RouteHandler from './Layout/RounteHandler';

class App extends Component {

  constructor() {
    super()
    this.state = {
      players: [
        {name: "Jonh"},
        {name: "Jack"},
        {name: "Jerk"},
        {name: "Jelly"},
      ],
      socket: {},
      username: "Jackson",
      asset: [
        { name: "Gold", amount:1000 },
        { name: "Silver", amount:600 },
        { name: "Brone", amount:10 },
        { name: "Diamond", amount:10 },
      ]
    }
  }
  // componentWillMount() {
  //     socket.emit("new_client", client)
  //     socket.on('all_clients', res => this.setState({ onlineUsers : res }))
  //   }
  // }

  /* Update function for Context provider */
  updateState = (key, val) => {
    this.setState({ [key]: val });
  }

  render() {
    return (
      <Fragment>
        <Context.Provider value={{state: this.state, updateValue: this.updateState}}>
          <BrowserRouter>
            <RouteHandler />
          </BrowserRouter>
        </Context.Provider>
      </Fragment>
    );
  }
}

export default App;

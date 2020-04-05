import React, { Fragment, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context'
import socket from './socket'
import RouteHandler from './Layout/RounteHandler';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      gameCode: "",
    }
  }
  componentWillMount() {
    socket.on("join_game_success", ({ message }) => {
      this.setState({ joinStatus: true })
      console.log("join_game_success")
    })
  }

  render() {
    return (
      <Fragment>
        <Context.Provider value={{ app: this }}>
          <BrowserRouter>
            <RouteHandler />
          </BrowserRouter>
        </Context.Provider>
      </Fragment>
    );
  }
}

export default App;

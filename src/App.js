import React, { Fragment, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context'
import RouteHandler from './Layout/RounteHandler';

class App extends Component {

  constructor() {
    super()
    this.state = {
      onlineUsers :[]
    }
  }
  // componentWillMount() {
  //     socket.emit("new_client", client)
  //     socket.on('all_clients', res => this.setState({ onlineUsers : res }))
  //   }
  // }
  
  render() {
    return (
      <Fragment>
      <Context.Provider value={this.state.onlineUsers}>
        <BrowserRouter>
            <RouteHandler/>
        </BrowserRouter>
      </Context.Provider>
    </Fragment>
  );
}
}

export default App;

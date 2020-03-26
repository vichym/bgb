import React, { Fragment, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import axios from 'axios'
import Context from './Context'
import socket from './socket'
import LoginPage from "./Components/LoginPage"

class App extends Component {

  constructor() {
    super()
    this.state = {
      onlineUsers :[]
    }
  }
  componentWillMount() {
    axios.get("http://www.geoplugin.net/json.gp").then(res => {
        let client = {
            city: res.data.geoplugin_city,
            region: res.data.geoplugin_region,
            country: res.data.geoplugin_countryName,
            continent: res.data.geoplugin_continentName
        }
      socket.emit("new_client", client)
      socket.on('all_clients', res => this.setState({ onlineUsers : res }))
    }
    )
  }
  render() {
    return (
      <Fragment>
      <Context.Provider value={this.state.onlineUsers}>
        <BrowserRouter>
            {/* <Layout /> */}
            <LoginPage/>
        </BrowserRouter>
      </Context.Provider>
    </Fragment>
  );
}
}

export default App;

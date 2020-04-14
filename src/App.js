import React, { Fragment, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context'
import RouteHandler from './Components/RounteHandler';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ""
    }
  }

  componentDidMount() {
    /* Add event listener for reload page event */
    window.addEventListener('beforeunload', this.handleReloadPage);
  }

  componentWillUnmount() {
    /* Add event listener for reload page event */
    window.removeEventListener('beforeunload', this.handleReloadPage);
  }

  handleReloadPage(e) {
    
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

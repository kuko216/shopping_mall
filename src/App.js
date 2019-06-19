import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import { Products, Wishlist } from 'pages';

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path='/products' component={Products} />
            <Route path='/wishlist' component={Wishlist} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
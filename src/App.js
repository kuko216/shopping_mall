import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from "mobx-react"
import { Products, Wishlist } from 'pages';

import MarketStore from 'stores/MarketStore';

const market = new MarketStore();

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider marketStore={market}>
          <Router history={history}>
            <Switch>
              <Route path='/products' component={Products} />
              <Route path='/wishlist' component={Wishlist} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
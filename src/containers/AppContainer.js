import React, { Component } from 'react'
import NavComponent from '../components/NavComponent'
import CounterComponent from '../components/CounterComponent'
import LoginComponent from '../components/LoginComponent'
import ProfileComponent from '../components/ProfileComponent'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {createStore} from 'redux';
import { Provider } from "react-redux";
import reducer from '../redux/reducers';

const store = createStore(reducer);


class App extends Component {
  render() {

    let pageName = "Home";

    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <NavComponent pageName={pageName}/>
            <Switch>
                <Route path="/counter">
                  <CounterComponent/>
                </Route>
                <Route path="/login">
                  <LoginComponent/>
                </Route>
                <Route path="/profile">
                  <ProfileComponent/>
                </Route>
                <Route path="/">
                  <Redirect to="/login" />
                </Route>
            </Switch>

          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
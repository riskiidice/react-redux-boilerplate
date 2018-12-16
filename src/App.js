import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import PrivateRoute from './components/common/PrivateRoute';
import AppHeader from "./components/layouts/AppHeader";
import AppSidebar from "./components/layouts/AppSidebar";
import AppSettings from "./components/layouts/AppSettings";
import AppFooter from "./components/layouts/AppFooter";
// import Dashboard from "./components/dashboard/Dashboard";
// import ProjectDetails from "./components/projects/ProjectDetail";
// import SignIn from "./components/auth/SignIn";
// import SignUp from "./components/auth/SignUp";
import UploadForm from "./components/documents/UploadForm";
import Login from "./components/auth/Login";

import store from './store/store'
import setAuthenToken from './utils/setAuthToken'
import { setCurrentUser, signOut } from './store/actions/authActions'

var isLoggedIn = false;
// Check for token
if (localStorage.token ) {
  // Set auth header auth
  setAuthenToken(localStorage.token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.token);
  isLoggedIn = !!decoded;
  // Set user and isAuthenticate
  store.dispatch(setCurrentUser(decoded));
  // Check for expire
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(signOut());
    window.location.href = "/auth/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              { isLoggedIn ? <AppHeader /> : ""}
              { isLoggedIn ? <AppSidebar /> : ""}
              <Switch>
                {/* <Route exact path="/" component={Dashboard} /> */}
                <Route exact path="/auth/login" component={Login} /> 
                <PrivateRoute path="/documents/create" component={UploadForm} />
               
                {/* <Route path="/project/:id" component={ProjectDetails} />
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/create" component={CreateProject} /> */}
              </Switch>
              { isLoggedIn ? <AppFooter  /> : ""}
              { isLoggedIn ? <AppSettings /> : ""}
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

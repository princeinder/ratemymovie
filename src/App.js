import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Single from './pages/home/single';
import Auth from "./components/auth/auth";
import Profile from "./components/profile/profile";
 import { createStore,applyMiddleware,compose } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);



export default class App extends React.Component{


render() {

  return (
    <Provider store={store}>
    <Router>
 <Header/>
 <Auth/>
 <Switch>
         
        <Route exact path="/" component={Home}  />
        <Route path="/movie/:id" component={Single}  />
        <Route path="/profile" component={Profile}  />      
      </Switch>
<Footer/>
  </Router>
  </Provider>
  );
}
}


import 'core-js/stable';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// added from router changes
import { Router, Route } from 'react-router';
import { Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

import StartPage from './component/StartPage.js';
import UserPage from './component/UserPage.js';
import Login from './component/startpgComponents/Login.js';
import Register from './component/startpgComponents/Register.js';
import Friends from './component/Friends.js';
import Notifications from './component/Notifications.js';

const history = createBrowserHistory();

ReactDOM.render(
	// added from router changes
	<Router history={history}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/Register" component={Register} />
			<Route exact path="/UserPage/:curr_username" component={UserPage} />
			<Route exact path="/UserPage/Notifications/:curr_username" component={Notifications} />
			<Route exact path="/UserPage/Friends/:curr_username" component={Friends} />
			//<Redirect from='/UserPage/' to="/"/>
		</Switch>
	</Router>
	, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About  from './components/about';
import NavMenu from "./components/NavMenu";

ReactDOM.render((
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />,
			<Route path="/about" component={About} />
		</Switch>,
		<NavMenu/>
	</BrowserRouter>),
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

serviceWorker.register();

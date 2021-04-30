import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Page404 from "./paginas/404";
import { Cabecalho } from "./components/cabecalho";

import "./assets/css/base/base.css";

function App() {
	return (
		<Router>
			<Cabecalho />

			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route path='/sobre'>
					<Sobre />
				</Route>

				<Route>
					<Page404 />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

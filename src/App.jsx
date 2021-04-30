import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Page404 from "./paginas/404";
import { Cabecalho } from "./components/cabecalho";

import "./assets/css/base/base.css";
import Post from "./paginas/Post";
import Categoria from "./paginas/Categoria";

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

				<Route path='/post/:id'>
					<Post />
				</Route>

				<Route path='/categoria/:id'>
					<Categoria />
				</Route>

				<Route>
					<Page404 />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

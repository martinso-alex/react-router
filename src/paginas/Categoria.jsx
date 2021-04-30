import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import { ListaCategorias } from "../components/lista-categorias";
import { ListaPost } from "../components/lista-post";
import { SubCategoria } from "../paginas/SubCategoria";

import "../assets/css/blog.css";
import { busca } from "../api/api";

const Categoria = () => {
	const [subcategorias, setSubcategorias] = useState([]);

	const { url, path } = useRouteMatch();
	const { id } = useParams();

	useEffect(() => {
		async function buscaSubCategorias() {
			return await busca(`/categorias/${id}`, (categoria) => {
				setSubcategorias(categoria.subcategorias);
			});
		}

		buscaSubCategorias();
	}, [id]);

	return (
		<>
			<div className='container'>
				<h2 className='titulo-pagina'>Pet Notícias</h2>
			</div>

			<ListaCategorias />

			<ul className='lista-categorias container flex'>
				{subcategorias.map((subcategoria) => (
					<li
						className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
						key={subcategoria}
					>
						<Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
					</li>
				))}
			</ul>

			<Switch>
				<Route exact path={path}>
					<ListaPost url={`/posts?categoria=${id}`} />
				</Route>

				<Route path={`${path}/:subcategoria`}>
					<SubCategoria />
				</Route>
			</Switch>
		</>
	);
};

export default Categoria;

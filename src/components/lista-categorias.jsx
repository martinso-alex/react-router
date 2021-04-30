import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";

import "../assets/css/blog.css";

export const ListaCategorias = () => {
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		async function buscaCategorias() {
			return await busca(`/categorias`, setCategorias);
		}

		buscaCategorias();
	}, []);

	return (
		<ul className='lista-categorias container flex'>
			{categorias.map((categoria) => (
				<Link to={`/categoria/${categoria.id}`}>
					<li
						className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}
					>
						{categoria.nome}
					</li>
				</Link>
			))}
		</ul>
	);
};

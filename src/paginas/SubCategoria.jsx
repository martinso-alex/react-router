import React from "react";
import { useParams } from "react-router";
import { ListaPost } from "../components/lista-post";

export const SubCategoria = () => {
	const { subcategoria } = useParams();

	return <ListaPost url={`/posts?subcategoria=${subcategoria}`} />;
};

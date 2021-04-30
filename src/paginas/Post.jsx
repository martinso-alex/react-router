import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { busca } from "../api/api";

import "../assets/css/post.css";

const Post = () => {
	const [post, setPost] = useState({});

	const { id } = useParams();
	let history = useHistory();

	useEffect(() => {
		async function buscaPost(id) {
			return await busca(`/posts/${id}`, setPost).catch(() => {
				history.push("/404");
			});
		}

		buscaPost(id);
	}, [id, history]);

	return (
		<main className='container flex flex--centro'>
			<article className='cartao post'>
				<h2 className='cartao__titulo'>{post.title}</h2>
				<p className='cartao__texto'>{post.body}</p>
			</article>
		</main>
	);
};

export default Post;

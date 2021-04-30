import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { busca } from "../api/api";

export const ListaPost = (props) => {
	const [posts, setPosts] = useState([]);

	const { url } = props;

	useEffect(() => {
		async function buscaPosts() {
			return await busca(url, setPosts);
		}

		buscaPosts();
	}, [url]);

	return (
		<section className='posts container'>
			{posts.map((post) => (
				<Link
					className={`cartao-post cartao-post--${post.categoria}`}
					to={`/post/${post.id}`}
				>
					<article key={post.id}>
						<h3 className='cartao-post__titulo'>{post.title}</h3>
						<p className='cartao-post__meta'>{post.metadescription}</p>
					</article>
				</Link>
			))}
		</section>
	);
};

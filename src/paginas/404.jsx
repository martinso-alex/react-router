import React from "react";
import image404 from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

const Page404 = () => {
	return (
		<main className='container flex flex--centro flex--coluna'>
			<img src={image404} alt='404' className='doguito-imagem' />
			<p className='naoencontrado-texto'>Ops, Essa página não existe!</p>
		</main>
	);
};

export default Page404;

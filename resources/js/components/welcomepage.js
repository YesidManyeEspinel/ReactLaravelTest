import React from 'react';

const WelcomePage = ({nameitem}) => (
	<>
	<h1 className="display-2 text-center">Hola bienvenido</h1>
	<p className="h3 text-muted text-center">Sabemos que quieres viajar en un {nameitem}</p>
	</>
);

export default WelcomePage

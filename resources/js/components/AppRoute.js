import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Index from './index';
import ListClient from './listclient';
import AddClient from './addclient';
import NotFound from './notfound';
import NavMenu from './nav';
import FooterMenu from './footer';
import WelcomePage from './welcomepage';

const AppRoute = ({navigation}) => {
	const [ item, setItem ] = useState('React in Laravel');
	
	const handleSubmit = (e) => {
		setItem(e.target.text)
	}
		
	return (

		<BrowserRouter>
		<>
			<NavMenu
				datanav={navigation}
				onSubmit={handleSubmit}
			/>
			<WelcomePage 
				nameitem = {item}
			/>
		</>
			<Switch>
				<Route exact path="/" component={Index} />
				<Route exact path="/listclient" component={ListClient} />
				<Route exact path="/addclient" component={AddClient} />
				<Route component={NotFound} />
			</Switch>
		<>
			<FooterMenu />
		</>
	</BrowserRouter>

	)
}

export default AppRoute;
import React from 'react';
import EtiqLi from './etiqli'
import { Link } from 'react-router-dom';

const NavMenu = ({datanav, onSubmit}) => (
	<>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			    <h3><Link className="navbar-brand" to="/" onClick={onSubmit}>
			        React in Laravel
			    </Link></h3>
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Nav-H" aria-controls="Nav-H" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			    </button>
				<div className="collapse navbar-collapse" id="Nav-H">
					<ul className="navbar-nav ml-auto">
						<EtiqLi
							datalis={datanav}
							onClick={onSubmit}
						/>
					</ul>
				</div>
			</nav>
		</> 
		);
		
export default NavMenu
import React from 'react';
import { Link } from 'react-router-dom';

const EtiqLi = ({datalis, onClick}) => (
	<>
	{
		datalis.map((datali)=>(
		<li className="nav-item active" key={datali.id}>
			<Link className="nav-link" to={datali.path} onClick={onClick}>{datali.name}</Link>
		</li>
		))
	}
	</>
)

export default EtiqLi
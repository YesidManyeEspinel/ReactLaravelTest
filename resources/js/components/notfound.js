import React from 'react';

import FooterMenu from './footer';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                
                <div className="container">
                    <h1 className="text-center">
                    	<strong>Oops!</strong>
                    </h1>
                    <h4 className="display-4 text-center">404 - PAGE NOT FOUND</h4>
                    <p class="lead text-center">
                    The page you are looking for doesn't exist, no longer exists or has been moved
                    </p>
                </div>
                <FooterMenu />
            </div>
        );
    }
}

export default NotFound;
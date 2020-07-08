import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import UrlApp from './UrlApp';
import AppRoute from './AppRoute';

const Example = () => {
    const [ error, setError ] = useState(null);
    const [ isloaded, setIsloaded] = useState(false);
    const [ datanav, setDatanav] = useState([]);

    useEffect(() => {
        loadNav();
    }, []);

    const loadNav = async () =>{
        try{
            let res = await fetch(`${UrlApp}/api/navigation`);
            let dataResNav = await res.json();
            setDatanav(dataResNav);
        }catch(error){
            setError(error);
        }
    }

    return(
        <AppRoute 
            navigation={datanav}
        />
        )
}

if (document.getElementById('example')) {
    ReactDOM.render(
    <Example />,
    document.getElementById('example')
    );
}
import React, { useState, useEffect } from 'react';
import UrlApp from './UrlApp';
import TableList from './tablelist';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const ListClient = () => {
    const [ error, setError ] = useState(null);
    const [ isloaded, setIsloaded] = useState(false);
    const [ dataclient, setDataclient] = useState([]);
    
    useEffect(() => {
        loadClient();
    }, []);

    const loadClient = async () =>{
        try{
            let res = await fetch(`${UrlApp}/api/client`);
            let dataResClient = await res.json();
            setDataclient(dataResClient);
        }catch(error){
            setError(error);
        }
    }

    return (
        <div className="container">
            <TableList
                lists={dataclient}
            />
        </div>
    )
}

export default ListClient;
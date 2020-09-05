import React, { useState, useEffect } from 'react';
import UrlApp from './UrlApp';
import TableList from './tablelist';
//import Pagination from './pagination';
import Pagination from './paginationCopy';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const ListClient = () => {
    const [ error, setError ] = useState(null);
    const [ isloaded, setIsloaded] = useState(false);
    const [ formState, setFormState] = useState({id:false,state:''});
    const [ dataclient, setDataclient] = useState([]);
    const [ filter,setFilter ] = useState('all');
    const [ lastPage,setLastPage ] = useState('');
    const [ fullClients,setFullClients ] = useState('');
    //Var-Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [clientsPage] = useState(50);
    const [numberItems] = useState(3);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        loadClient();
        updateState();
    }, [filter,formState.id,currentPage]);

    const loadClient = async () => {
        try{
            setIsloaded(true);
            let res = await fetch(`${UrlApp}/api/client/${filter}?page=${currentPage}`);
            let dataResClient = await res.json();
            console.log(dataResClient);
            setFullClients(dataResClient.total);
            setDataclient(dataResClient.data);
            setLastPage(dataResClient.last_page);
            setIsloaded(false);
        }catch(error){
            setError(error);
        }
    }

    const updateState = async () => {
        if (formState.id) {
            try{
                let dataSeend =
                {
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(formState)
                }
                let res = await fetch(`${UrlApp}/api/state`,dataSeend);
                let dataRes = await res.json();
                if (dataRes.message) {
                    console.log(dataRes);
                }else{
                    setFormState({id:false,state:''})
                    swal({
                        title: `Success`,
                        text: `Data update correctly`,
                        icon: 'success',
                        timer: 5000,
                    });
                }
            }catch(error){
                setError(error)
            }
        }
    } 

    const handleChange = async (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
            id: true,
        });
    }

    const handleSelect = e => {
        setFilter(e.target.value);
    }

    return (
        <div className="container">
            
            <TableList
                lists={dataclient}
                isloaded={isloaded}
                onChange={handleChange}
                handleSelect={handleSelect}
            />
            <Pagination
                lastPage={lastPage}
                fullClients={fullClients}
                clientsPage={clientsPage}
                paginate={paginate}
                currentPage={currentPage}
                numberItems={numberItems}
            />
        </div>
    )
}

export default ListClient;
import React, { useState, useEffect } from 'react';
import UrlApp from './UrlApp';
import FormClient from './form';
import swal from 'sweetalert';

const AddClient = () => {
    const [ error, setError ] = useState(null);
    const [ message, setMessage] = useState(''); 
    const [ form, setForm] = useState({name:'',nickname:'',email:'',phone:'',age:''});

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (parseInt(form.age) < 18 || parseInt(form.age) >= 100) {
           swal({
                title: `Error in age: ${form.age}`,
                text: `invalidated age, allowed range 18 to 100 years old`,
                icon: 'error',
                timer: 5000,});
        }else{
            try{
                let dataSeend =
                {
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(form)
                }
                let res = await fetch(`${UrlApp}/api/client`,dataSeend);
                let dataRes = await res.json();
                if (dataRes.message) {
                    console.log(dataRes);
                    var obj = dataRes.errors;
                    for (const prop in obj) {
                        swal({
                            title: `Error in ${prop}`,
                            text: `${obj[prop]}`,
                            icon: 'warning',
                            timer: 5000,
                        });
                    setMessage(dataRes.message);
                    }
                }else{
                    setForm({name:'',nickname:'',email:'',phone:'',age:''})
                    swal({
                        title: `Success`,
                        text: `Data sent correctly`,
                        icon: 'success',
                        timer: 5000,
                    });
                }
            }catch(error){
                setError(error)
            }
        }
    }

    const handleChange = (e) => {
        if (form.email) {
            var str = form.email.split('@');
            var dnn = str[0];
        }
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            nickname: dnn
        });
    }

    return (
        <div className="container center">
            <FormClient
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
             />
        </div>
    )
}

export default AddClient;
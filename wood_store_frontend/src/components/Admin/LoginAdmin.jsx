import { useEffect, useState } from 'react';
import classes from './LoginAdmin.module.css'
import { Form, useActionData } from 'react-router-dom';

export default function Login(){
    const [selectedField, setSelectedField] = useState('');
    const [ error, setError ] = useState();
    //Todo: Handle error messages
    const actionData = useActionData();

    

    useEffect(()=>{
        if(actionData?.status === 401){
            setError('Incorrect Username or Password!')
        }

    }, [actionData])

    console.log(actionData);
    
    const handleFocus = (id)=>{
        setSelectedField(id);
    }

    return (
        <div className={classes.loginContainer}>
            <Form method="POST" className={classes.logiForm}>
                <h2>Login Admin</h2>
                
                <div className={classes.formGroup}>
                    <p style={{marginBottom: "2rem", color: "red", textAlign: "center"}}>{error}</p>
                    <label className={selectedField == 'username' && classes.clicked} htmlFor="username">Username</label>
                    <input onBlur={()=> setSelectedField('')} onFocus={()=>handleFocus('username')} type="text" id="username" name="username" required />
                </div>
                <div className={classes.formGroup}>
                    <label className={selectedField == 'password' && classes.clicked} htmlFor="password">Password</label>
                    <input onBlur={()=> setSelectedField('')} onFocus={()=>handleFocus('password')} type="password" id="password" name="password" required />
                </div>
                <button className='defaultBtn' type="submit">Login</button>
            </Form>
        </div>
    )
}
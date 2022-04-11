import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
        // console.log('hey!');
    }, []);

    useEffect( () => {
        // console.log('Cambio el nombre!');
    }, [name]);

    const handleInputChange = ({target}) => {
        setformState({
            ...formState,
            [target.name]: target.value
        });
    }
  
    return (
        <>
            <h1><strong>useEffect</strong></h1>
            <hr />

            <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control"
                        placeholder="Type your Name" 
                        onChange={handleInputChange}
                        value={name}
                    />
                </div>
        
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control"
                        placeholder="youremail@gmail.com" 
                        onChange={handleInputChange}
                        value={email}
                    />
                </div>

            {(name === '123') && <Message />}
        
        </>
     )
}

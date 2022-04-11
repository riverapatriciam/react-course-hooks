import React from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormsWithCostumHooks = () => {
    const [formState, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  
    return (
        <>
            <h1><strong>FormsWithCostumHooks</strong></h1>
            <hr />

            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control"
                        placeholder="Ingrese su nombre" 
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

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        className="form-control"
                        placeholder="Ingrese su contraseña" 
                        onChange={handleInputChange}
                        value={password}
                    />
                </div>

                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
            
        </>
     )
}

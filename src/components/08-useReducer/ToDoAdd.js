import React from 'react';
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({handleAddToDo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handledSubmit = (e) => {
        e.preventDefault();

        if( description.trim() <= 1 ) {
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddToDo(newToDo);
        
        reset();
    }

    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr />
            <form onSubmit={handledSubmit}>
                <input
                            type="text"
                            name='description'
                            className='form-control'
                            placeholder='Tarea a agregar...'
                            autoComplete='off'
                            value={description}
                            onChange={handleInputChange}
                />
                <div className='d-grid'>
                            <button 
                                className='btn btn-outline-primary mt-1'
                                type='submit'
                                > Agregar </button>
                </div>
            </form> 
        </>
    )
}

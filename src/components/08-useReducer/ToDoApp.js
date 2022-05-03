import React, { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';
import './style.css';

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || [] ;
}

export const ToDoApp = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('toDos', JSON.stringify(toDos))
    }, [toDos]);

    const handleAddToDo = (newToDo) => {
        dispatch({
            type: 'add',
            payload: newToDo
        })
    }

    const handleDelete = (toDoId) =>{
        const actionDelete = {
            type:'delete',
            payload: toDoId
        };

        dispatch(actionDelete);
    }

    const handleToggle = (toDoId) => {
        dispatch({
            type:'toggle',
            payload: toDoId
        })
    }

    return (
        <>
            <h1>ToDoApp ({toDos.length}) </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <ToDoList toDos={toDos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className='col'>
                    <ToDoAdd handleAddToDo={handleAddToDo}  />
                </div>
            </div>   
        </>
    )
}

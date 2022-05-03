import React from 'react';
import { ToDoItems } from './ToDoItems';

export const ToDoList = ({toDos, handleToggle, handleDelete}) => {
    
    console.log(handleToggle);

    return (
        <ul className='list-group list-group-flush'>
            {
                toDos.map( (toDo, index) => (
                    <ToDoItems key={toDo.id} toDo={toDo} index={index} handleToggle={handleToggle} handleDelete={handleDelete} />
                    ))
                    
            }
        </ul>
    )
}

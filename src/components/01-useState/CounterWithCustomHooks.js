import React from 'react';
import { useCounter } from '../../hooks/useCounter';


import './counterapp.css';

export const CounterWithCustomHooks = () => {
    
    const {state, incrementar, decrementar, reset} = useCounter(100);
  
    return (
        <>
            <h1>Counter with Hooks: {state}</h1>
            <hr />
            <div>
                <button className='btn btn-primary' onClick={()=> incrementar(2)}>+1</button>
                <button className='btn btn-secondary' onClick={reset}>Reset</button>
                <button className='btn btn-danger' onClick={()=> decrementar(2)}>-1</button>    
            </div>
        </>
  )
}

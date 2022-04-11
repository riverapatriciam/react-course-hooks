import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import './memo.css';


export const Memoraize = () => {

    const [show, setshow] = useState(true);
    const {counter, incrementar} = useCounter(10);

    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr />

            <button className='btn btn-primary' onClick={incrementar}>
                +1
            </button>

            <button 
                className='btn btn-outline-primary mx-3'
                onClick={ () => setshow(!show)}>
                    Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}

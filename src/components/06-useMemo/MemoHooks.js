import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';


import './memo.css';


export const MemoHooks = () => {

    const [show, setshow] = useState(true);
    const {counter, incrementar} = useCounter(5000);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <>
            <h1> Memo Hooks </h1>
            <h3>Counter: <small> {counter} </small> </h3>
            <hr />

            <p>{memoProcesoPesado}</p>

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

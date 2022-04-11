import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  
    const [counter, setCounter] = useState(initialState);

    const incrementar = (/*factor = 1*/) => {
        //setCounter(counter + factor);
        setCounter(counter + 1);
    };

    const decrementar = (/*factor = 1*/) => {
        //setCounter(counter - factor);
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(initialState)
    }

    return {
        counter,
        incrementar,
        decrementar,
        reset
    };


}

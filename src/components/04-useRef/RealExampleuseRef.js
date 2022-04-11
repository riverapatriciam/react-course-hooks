import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-Examples/MultipleCustomHooks.js';

import '../02-useEffect/effects.css';

export const RealExampleuseRef = () => {
    
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <button
                className='btn btn-outline-primary mt-3'
                onClick={ () => setShow(!show)}
            >
                Show/Hide
            </button>
            <hr />
            {
                show && (
                    <MultipleCustomHooks />
                )
            }

        </div>
    )
}

import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effects.css';


//1. Cambiar el loading... por un spiner
//2. Cambiar el texto de los botones por un spiner
//3. Que el container del quote no cambie

export const MultipleCustomHooks = () => {
  
    const [showButton, setshowButton] = useState(false);


    const {counter, incrementar, decrementar} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); 
    const {quote, author} = !!data && data[0];

    if( !loading && !showButton){

        setshowButton(true );
    }

    return (
        <>
            {/* <h1>Breaking Bad Quotes</h1>
            <hr /> */}

            <div className='card mb-3 overflow-auto' style={{height: "100px"}}>
                {
                    loading ? (
                        <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                    : (
                        <div className='card-body'>
                            <blockquote className="blockquote text-end mb-0">
                                <p>{quote}</p>
                                <footer className='blockquote-footer'> {author} </footer>
                            </blockquote>
                        </div>
                    )

                }
            </div>

            {
                showButton && (
                    <div className='row'>
                        <div className='col-6'>
                            <button className={ counter > 1 ? 'btn btn-primary ' : 'btn btn-primary disabled'} onClick={decrementar}> 
                            {
                                    loading ? (
                                        <div>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </div>
                                    ) : 
                                    ('Previus Quote')
                                }
                            </button>
                        </div>
                        <div className='col-6 text-end'>
                            <button className='btn btn-primary me-md-2' onClick={incrementar}>
                                {
                                    loading ? (
                                        <div>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </div>
                                    ) : 
                                    ('Next Quote')
                                }
                                
                            </button>
                        </div>
                    </div>
                )
            }
            

        </>
    )
}

import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {
    
    const isMountend = useRef(false);

    const [state, setState] = useState({ data:null, loading: true, error: null });

    useEffect(() => {
    
      return () => {
        isMountend.current = true;
      }
    }, [])
    

    useEffect(() => {
        
        setState({data:null, loading:true, error:null})

        fetch(url)
            .then( resp => resp.json())
            .then(data => {
        
                if (!isMountend.current){

                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } 
               
            })

    }, [url]);

    return state;
    
}

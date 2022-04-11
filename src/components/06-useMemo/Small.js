import React from 'react'

export const Small = React.memo(({value}) => {
    
    console.log('Me han llamado :c');

    return (
        <small>{value}</small>
    )
});

import React, { useState, useEffect } from 'react'

/**
 * Import custom components / modules
 */
import API from './api';
import Character from './Character';

export default function CharList( props ){
    const { url } = props;
    const [ details, setDetails ] = useState( [] );

    useEffect( () => {
        API(`${url}`, ( res ) =>{
            setDetails( res.data.results );
        })
    }, [ url ] )

    return(
        <div className="container">
            {
                details.map( item  => {
                    return <Character data={ item } key={ item.id } />
                } )
            }
        </div>
    )
}
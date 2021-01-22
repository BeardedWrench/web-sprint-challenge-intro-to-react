import React from 'react';

export default function Searchbar( props ){
    const { onChange } = props;
    return(
        <form className="search-form" onSubmit={ onChange }>
            <input 
            type="text" 
            placeholder="Character Name..."
            />
            <input type="submit"/>
        </form>
    );
}
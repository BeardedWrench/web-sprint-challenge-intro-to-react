import React from 'react';
import styled from 'styled-components';

export default function Searchbar( props ){
    const { onSubmit } = props;
    return(
        <form className="search-form" onSubmit={ onSubmit }>
            <SearchField 
            type="text" 
            placeholder="Character Name..."
            />
            <SearchButton type="submit">Submit</SearchButton>

        </form>
    );
}

const SearchField = styled.input`
    height:30px;
    width:300px;
    border: 2px solid #ff9800;
    padding:5px;

    &:focus{
        outline:none;
    }
`;
const SearchButton = styled.button`
    height: 44px;
    width:100px;
    background-color: #FFF;
    display: inline-block;
    cursor: pointer;
    border: 2px solid #ff9800;
    border-left:none;
    color: #ff9800;
    text-decoration: none;

    &:hover{
        background-color: #f5f5f5;
    }
    &:active{
        outline:none;
    }
    &:focus{
        outline:none;
    }
`;
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
    border: 4px solid #ff9800;
    border-top-right-radius:none;
    border-bottom-right-radius:none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding:5px;
    font-weight:600;
    font-size:1.3rem;
    color:#ff9800;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;

    &:focus{
        outline:none;
    }
    &::placeholder{
        color:#ff9800;
        opacity:0.5;
    }
    
`;
const SearchButton = styled.button`
    height: 48px;
    width:100px;
    background-color: #FFF;
    display: inline-block;
    cursor: pointer;
    border: 4px solid #ff9800;
    border-left:none;
    border-top-left-radius:none;
    border-bottom-left-radius:none;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    color: #ff9800;
    text-decoration: none;
    font-weight:600;
    font-size:1.3rem;

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
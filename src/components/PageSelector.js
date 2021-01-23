import React from 'react';
import styled from 'styled-components';

export default function PageSelector( props ){
    const { nextP, prevP } = props;
    return (
        <div className="pageButtons">
            <PageButton onClick={ prevP }>Previous</PageButton>
            <PageButton onClick={ nextP }>Next</PageButton>
        </div>
    );
}

const PageButton = styled.button`
    height: 48px;
    width:150px;
    background-color: #FFF;
    display: inline-block;
    cursor: pointer;
    border: 4px solid #12B0C9;
    border-radius: 5px;
    color: #12B0C9;
    text-decoration: none;
    font-weight:600;
    font-size:1.3rem;
    margin-left:10px;
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
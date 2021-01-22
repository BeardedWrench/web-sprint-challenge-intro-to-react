import React from 'react';
import styled from 'styled-components';

export default function PageSelector( props ){
    const { next, prev } = props;
    return (
        <div className="pageButtons">
            <PageButton onClick={ prev }>Previous</PageButton>
            <PageButton onClick={ next }>Next</PageButton>
        </div>
    );
}

const PageButton = styled.button`
    height: 48px;
    width:150px;
    background-color: #FFF;
    display: inline-block;
    cursor: pointer;
    border: 4px solid #ff9800;
    border-radius: 5px;
    color: #ff9800;
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
import React from 'react';
import styled from 'styled-components';

export default function PageSelector( props ){
    const { action, text } = props;
    return (
        <PageButton onClick={ action }>{text}</PageButton>
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
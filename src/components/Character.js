/**
 * Default Imports 👩‍💻
 */
import React from 'react';
import styled from 'styled-components';


export default function Character( props ){
    const { data } = props;

    const getStatus = (info) => {
        if(info === "Alive"){
            return '#55CC44';
        }else if(info === "Dead"){
            return '#d63e2e';
        }else{
            return '#838383';
        }
    }
    return (
        <div className="card">
            <img src={ data.image } />
            <div className="charInfo">
                <h2><a href="#">{ data.name }</a></h2>
                <h3><Indicator status={getStatus(data.status)}/>{ data.status } - { data.species }</h3>
                <span className="info">Last known location</span>
                <h4><a href={ data.location.url }>{ data.location.name }</a></h4>
            </div>
        </div>
    )
}

const Indicator = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  margin-right: 0.375rem;
  background: #d63e2e;
  background: ${(pr)=> pr.status};
  display:inline-block;
`;
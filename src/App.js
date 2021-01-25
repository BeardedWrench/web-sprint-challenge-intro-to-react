import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * Custom Imports
 */
import API from './components/api';
import CharList from './components/CharList';
import Searchbar from './components/Searchbar';
import PageSelector from './components/PageSelector';


//let currentPage = 1;

const App = () => {
  const [ url, setUrl ] = useState("https://rickandmortyapi.com/api/character")

  const [ details, setDetails ] = useState( [] )

  useEffect( () => {
    API(`${url}`, ( res ) =>{
        setDetails( res.data.info );
    })
  }, [ url ] )

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const search = ( event ) => {
    const value = document.querySelector('input').value;
    setUrl( `https://rickandmortyapi.com/api/character/?name=${ value }` )
    console.log(url);
    event.preventDefault();
  }
  const nextPage = () =>{
    setUrl(details.next);
  }
  const prevPage = () =>{
    setUrl(details.prev);
  }

  return (
    <div className="App">
      <a href=""><img className="logo" src='https://i.ibb.co/5rYfrXd/rick.png' alt="Logo" /></a>
      <h1 className="Header">Characters</h1>
      
        <Searchbar onSubmit={ search } />
        <CharList url={ url }/>

        <PageSelector nextP={ nextPage } prevP={ prevPage } />
        
      <div className="footer">Created By: <a href="http://www.github.com/beardedwrench">Terry Brown</a></div>
    </div>
  )
}

export default App;

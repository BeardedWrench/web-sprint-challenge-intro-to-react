import React, { useState } from 'react';
import './App.css';

/**
 * Custom Imports
 */
import CharList from './components/CharList';
import Searchbar from './components/Searchbar';


let currentPage = 1;

const App = () => {
  const [ url, setUrl ] = useState("https://rickandmortyapi.com/api/character")
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

  const nextPage = () => {
    if( currentPage == 34 ){
      return currentPage;
    }else{
      currentPage++;
      setUrl(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
    }
  }
  const prevPage = () => {
    if( currentPage == 1 ){
      return currentPage;
    }else{
      currentPage--
      setUrl(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
    }
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        <Searchbar onSubmit={ search }  prevP={ prevPage } nextP={ nextPage } />
        <CharList url={ url }/>
    </div>
  )
}

export default App;

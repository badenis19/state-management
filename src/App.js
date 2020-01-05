import React from 'react';
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie"


function App() {
  return (
    // All the state from MovieProvider are accessible in the component wrapped inside
    <MovieProvider>
      <div className="App">
        < Nav/>
        < AddMovie />
        < MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;

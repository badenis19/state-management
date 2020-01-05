import React, { useContext } from 'react';
// import {MovieProvider} from "./MovieContext"; 
import { MovieContext } from "./MovieContext";

// defining function 
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        // <MovieProvider>
        <div>
           <h3>Name: </h3>
           <p>List of Movies:  {movies.length} </p>
        </div>
        // </MovieProvider>
    );
}

// exporting function
export default Nav; 
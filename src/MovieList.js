import React, { useState, useContext } from 'react';
import Movie from "./Movie";
import { MovieContext } from "./MovieContext"

// defining function 
const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)
    
    // GOAL - To output the data that are in the state into the screen
    return (
        <div>
            { movies.map((movie => (
                 < Movie name={movie.name} price={movie.price} key={movie.id} />
                )))
            }
        </div>
    );
}

// exporting function
export default MovieList; 
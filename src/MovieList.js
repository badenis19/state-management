import React, { useState } from 'react';

// defining function 
const MovieList = () => {
    // creating the State
    // movies is the name of the variable, in this case an array of Objects
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 23124
        },
        {
            name: "Game of Thrones",
            price: "$10",
            id: 3434332
        },
        {
            name: "The Godfather",
            price: "$10",
            id: 32423
        }
    ]);

    // GOAL - To output the data that are in the state into the screen
    return (
        <div>
            { movies.map((movie => (
                <li>{movie.name}</li>
                )))
            }
        </div>
    );
}

// exporting function
export default MovieList; 
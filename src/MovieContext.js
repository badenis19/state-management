import React, { useState, createContext } from "react";
// import MovieList from "./MovieList";

// MovieContext needs to be imported wherever when want to use the info from MovieContext (in State)
export const MovieContext = createContext();

// MovieProvider is going to provide information to the different components in between <MovieContext.Provider> (BELOW)
export const MovieProvider = props => {
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

    // All the components that need information from here needs to be wraped between <MovieContext.Provider> 
    // We can use { props.children } inside as it will render all the childs component
    return (
        <MovieContext.Provider  value={[movies, setMovies]}>
            { props.children } 
            {/* < Nav />
            < MovieList /> */}
        </MovieContext.Provider>
    );
};

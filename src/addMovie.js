import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import uuid from "uuid/v1"; // use to auto-generate unique ids (IMPORTANT - npm install uuid AND yarn install )

const AddMovie = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const AddMovie = (e) => {
        e.preventDefault(); // prevents form from refreshing clicking on form 
        // the ... is going copy our object 
        // previousMovies is the latest about the movie state, and add things to it 
        setMovies(previousMovies => [...previousMovies, {
            name: name,
            price: price,
            id: uuid()
        }])
    };

    return (
        <form onSubmit={AddMovie} >
            <input type="text" name="name" value={name} placeholder="Enter name" onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    );
};

export default AddMovie;
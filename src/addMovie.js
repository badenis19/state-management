import React, { useState } from "react";



const AddMovie = () => {
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("")


    return (
        <form action="">
            <input type="text" name="name" />
            <input type="text" name="price" />
            <button>Submit</button>
        </form>
    );
};
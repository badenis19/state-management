import React from 'react';

// defining function 
const Movie = ({name, price}) => {
    
    return (
        <div>
           <h3>{name}</h3>
           <p>{price}</p>
        </div>
    );
}

// exporting function
export default Movie; 
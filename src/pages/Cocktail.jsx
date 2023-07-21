import React from 'react';
import { useParams } from 'react-router-dom';

const Cocktail = ({cocktail}) => {
    console.log(cocktail);
    let {uid} = useParams();
    return (
        <div>
            <h3> Le cocktail </h3>
           
        </div>
    );
};

export default Cocktail;

import React from 'react';
import  { useEffect, useState } from "react";
import axios from 'axios';

import Card from './Card';
import './style.css';
import dataCocktails from '../data.json';
import Cocktail from '../pages/Cocktail';

const Form = () => {

    
    const [search, setSearch] = useState('');

    const [inputSearch, setInputSearch] = useState('');

    const [cocktailsData, setCocktailsData] = useState([]);

    const [searchList, setSearchList] = useState([]);



// Requete avec le boutton search
    useEffect(() => { 
      axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      )
      .then((res) => setCocktailsData(res.data.drinks))
      .catch((err) => console.log(err))
      }, [search]);


// Requete proposition cocktail
      useEffect(() => {
        const array = [];
        dataCocktails.cocktails.map((item) => {
          if (item.name.toLowerCase().includes(search.toLowerCase())) {
            array.push(item.name);
          }
          setSearchList(array);
        });
 
      }, [search]);
    

    const simpleSubmit = (e) =>{
      e.preventDefault();
    }

    return (
        <div className=''>
            <div className='text-form'> 
                <h5> Quel cocktail vous botte ? </h5>
                <form action="" onSubmit={simpleSubmit}>
                    <input
                        type="text"
                        placeholder="Entrez le titre d'un cocktail"
                        id="search-input"
                        onChange={(e) => setInputSearch(e.target.value)}
                    />
                    <button className='btn btn-warning'  onClick={() => setSearch(inputSearch)}> Rechercher </button>
                </form>
                
                { search&&  searchList.map((item, index) =>
                    <p key={index}> {item}</p>
                )}
            </div>
                <div className="cards"> 
                    {cocktailsData? 
                    cocktailsData
                    .map((cocktail) => 
                    <Card key={cocktail.idDrink} cocktail={cocktail} />
                    ) : <p> Pas de cocktail correspondant</p>}
                </div>

      </div>
    );
};

export default Form;

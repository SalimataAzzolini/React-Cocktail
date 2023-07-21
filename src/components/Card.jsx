import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Card = ({ cocktail }) => {
  const ingredientList = [];

  for (let i = 1; i < 16; i++) {
    let ingredient = cocktail[`strIngredient${i}`];
    if (ingredient) {
      ingredientList.push(ingredient);
    }
  }

let navigate = useNavigate();


const showOneCocktail = (cocktailId) => {
    console.log('click');
    navigate("../cocktail/"+cocktailId); 
} 

  return (
    <div>
      <ul>
        <li>
          <a className="card">
            <img src={cocktail.strDrinkThumb} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src={cocktail.strDrinkThumb}
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">{cocktail.strDrink}</h3>
                  <span className="card__status">{cocktail.strCategory}</span>
                </div>
              </div>
              <p className="card__description">{cocktail.strInstructions}</p>
              <button onClick={() => showOneCocktail(cocktail.idDrink)}> voir plus</button>
            </div>
          </a>
        </li>
      </ul>
     
    </div>
  );
};

export default Card;

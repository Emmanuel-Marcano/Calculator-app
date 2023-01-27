import React from 'react'
import '../App.css';

function Recipes({title, calories, image, ingredients}){
    return (
        <div className='recipe-card'>
            <div className='recipe-text'>
                <h1>{title}</h1>
                <h2>Ingredients:</h2>
                <ol>
                {ingredients.map(function(ingredient){
                    return <li>{ingredient.text}</li>
                })}
                </ol>
                <h3>Calories: {calories}</h3>
            </div>
            <div className='recipe-img'>
                <img className='images' src={image} alt="" />
            </div>
        </div>
    )
}


export default Recipes
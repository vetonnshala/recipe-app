/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
            <div className={style.recipe}>
              <h3 className="recipe-title" >{title}</h3>
              <img className={style.image} src={image} alt="image"/>
              <ul>
                {ingredients.map(ingredient =>(
                  <li>{ingredient.text}</li>
                ))}
              </ul>
              <p>Calories: {calories}</p>
               {/* <a href="#" className={style.button}>View more</a> */}
            </div>

    );
}
export default Recipe;
import React from 'react';
import Instructions from './Instructions';

const Recipe = ({ name, ingredients, steps }) =>
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <ul className='ingredients'>
      {ingredients.map((ingredient, i) =>
        <li key={i}>{ingredient.name}</li>
      )}
    </ul>

    <Instructions title='Cooking Instructions' steps={steps} />
  </section>

export default Recipe;
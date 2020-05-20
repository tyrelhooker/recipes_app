import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ title, list }) =>
  <div>
    <h3>{title}</h3>
    <ul className='ingredients'>
      {list.map((ingredient, i) =>
        <Ingredient key={i} {...ingredient} />
      )}
    </ul>
  </div>


export default IngredientList;
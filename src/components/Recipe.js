import React, { useEffect, useState } from 'react';
import IngredientList from './IngredientList';
// import Ingredient from './Ingredient';
import Instructions from './Instructions';
import Summary from './Summary';

const Recipe = ({ name, ingredients, steps }) => {
  const [mounted, setMounted] = useState(true);

  const toggle = () => setMounted(!mounted);

  return (
    <section id={name.toLowerCase().replace(/ /g, '-')}>
      <Summary 
        title={name} 
        ingredients={ingredients.length} 
        steps={steps.length} 
        onClick={toggle}
      />
     {!mounted && <div>
        <h2>{name}</h2>
         <IngredientList title='Ingredients' list={ingredients} />
        <Instructions title='Cooking Instructions' steps={steps} />
      </div>}
  
      
    </section>
  )
};

export default Recipe;
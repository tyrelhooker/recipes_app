import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ ingredients, steps, title, onClick }) => {
  console.log(typeof ingredients);

  return (
    <div className='summary-box' onClick={() => onClick()}>
      <h1>{title}</h1>
      <p>{ingredients} Ingredients | {steps} Steps</p>
      
    </div>
  )
}

Summary.propTypes = {
  ingredients: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired
}

Summary.defaultProps = {
  ingredients: 0,
  steps: 0
}

export default Summary;
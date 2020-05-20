import React from 'react';

const Instructions = ({title, steps}) =>
  <section className='instructions'>
    <h3>{title}</h3>
    <ol>
    {steps.map((step, i) => 
      <li key={i}>{step}</li>
    )}
    </ol>

  </section>

export default Instructions;
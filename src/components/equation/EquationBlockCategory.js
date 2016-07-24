import React from 'react';
import EquationBlock from './EquationBlock';

import './Equation.css';

const EquationBlockCategory = ({category, equations}) => (
  <div key={category} className="EquationBlockCategory">
    <h1>{category}</h1>
    {equations.map(equation => <EquationBlock key={equation.name} equation={equation}/>)}
  </div>
);

export default EquationBlockCategory

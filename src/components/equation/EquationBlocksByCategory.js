import React from 'react';
import EquationBlockCategory from './EquationBlockCategory';

import './Equation.css';

const EquationBlocksByCategory = ({equations}) => {
  const equationsByCategory = equations.reduce((groups, equation) => {
    (groups[equation.category] = groups[equation.category] || []).push(equation);
    return groups;
  }, {});

  return (
    <div className="EquationBlocksByCategory">
      {Object.keys(equationsByCategory).map(category => <EquationBlockCategory
        category={category}
        equations={equationsByCategory[category]}/>)}
    </div>
  );
};

export default EquationBlocksByCategory;

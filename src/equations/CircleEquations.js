import Equation from '../domain/Equation';

const all = [

  new Equation(
    'Circles',
    'Circumference',
    'Diameter x PI',
    'Units',
    {diameter: 7917.5},
    vals => vals.diameter * Math.PI
  )

]

export default all;

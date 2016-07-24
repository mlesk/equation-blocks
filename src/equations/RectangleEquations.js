import Equation from '../domain/Equation';

const all = [

  new Equation(
    'Rectangle',
    'Area of a Rectangle',
    'Length x Width',
    'Units Squared',
    {length: 13, width: 13},
    vals => vals.length * vals.width
  ),

  new Equation(
    'Rectangle',
    'Length From Area and Width',
    'Area / Width',
    'Units',
    {area: 100, width: 10},
    vals => vals.area / vals.width
  ),

  new Equation(
    'Rectangle',
    'Width From Area and Length',
    'Area / Length',
    'Units',
    {area: 100, length: 10},
    vals => vals.area / vals.length
  ),

  new Equation(
    'Rectangle',
    'Volume of a Rectangle',
    'Length x Width x Depth',
    'Units Cubed',
    {length: 13, width: 13, 'depth': 13},
    vals => vals.length * vals.width * vals.depth
  )
];

export default all;

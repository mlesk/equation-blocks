import Equation from '../domain/Equation';
import Codes from './CharacterCodes';

const rad = Codes.radical;
const sqrd = Codes.squared;
const nwl = Codes.newLine;

const all = [

  new Equation(
    'Triangle',
    'Hypotenuse: Pythagoream\'s Theoram',
    `c${sqrd} = a${sqrd} + b${sqrd}, thus ${nwl}c = ${rad}(a${sqrd} + b${sqrd})`,
    'Units',
    {a: 13, b: 13},
    vals => Math.sqrt(Math.pow(vals.a, 2) + Math.pow(vals.b, 2))
  )

];

export default all;

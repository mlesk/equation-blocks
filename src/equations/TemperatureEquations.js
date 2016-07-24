import Equation from '../domain/Equation';
import Codes from './CharacterCodes';

const nwl = Codes.newLine;
const degrees = Codes.degrees;

const all = [

  new Equation(
    'Temperature',
    'Fahrenheit to Celsius',
    `C${degrees} = (F${degrees} - 32) * 5/9, or ${nwl}C${degrees} = (F${degrees} - 32) * 1.8`,
    `C${degrees}`,
    {fahrenheit: 32},
    vals => (vals.fahrenheit - 32) * (5/9)
  ),

  //Todo ... Gavin ... Finish this
  new Equation(
    'Temperature',
    'Celsius to Fahrenheit',
    `F${degrees} = ?`,
    `C${degrees}`,
    {celcius: 0},
    vals => '?'
  )

];

export default all;

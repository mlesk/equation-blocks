import RectangleEquations from './RectangleEquations';
import CircleEquations from './CircleEquations';
import TriangleEquations from './TriangleEquations';
import TemperatureEquations from './TemperatureEquations';

const all = RectangleEquations.concat(
            CircleEquations,
            TriangleEquations,
            TemperatureEquations);

export default all;

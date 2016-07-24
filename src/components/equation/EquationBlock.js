import React, {Component} from 'react';
import './Equation.css';

// Turn this into something you can punch in on the fly ... create equation
// .. name, description, units, inputs, calculation ... where to store it..

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

class EquationBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      equation: props.equation
    };
  }

  handleOnChange = (event) => {
    var updatedEquation = this.state.equation.copyWithNewValue(event.target.name, event.target.value);

    this.setState({equation: updatedEquation});
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState.equation !== this.state.equation;
  }

  render() {
    return (
      <table className="EquationBlock">
        <tbody>
          <tr>
            <td colSpan="2" className="EquationBlock-Title">{this.state.equation.name}</td>
          </tr>
          <tr>
            <td className="EquationBlock-Label">Equation</td>
            <td className="EquationBlock-Value">{this.state.equation.description}</td>
          </tr>
          {this.renderInputRows(this.state.equation.inputs)}
          <tr>
            <td className="EquationBlock-Label">Result</td>
            <td className="EquationBlock-Answer">{this.state.equation.calcAnswer()}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  renderInputRows = (inputs) => {
    return Object.keys(inputs).map(name => <tr key={name}>
      <td className="EquationBlock-Label">{capitalize(name)}</td>
      <td className="EquationBlock-Input"><input
        placeholder="Enter Value"
        name={name}
        value={inputs[name]}
        onChange={this.handleOnChange}/></td>
    </tr>);
  }
}

export default EquationBlock;

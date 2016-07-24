export default class Equation {
    constructor(category, name, description, units, inputs, calcFunc) {
        this.category = category;
        this.name = name;
        this.description = description;
        this.units = units;
        this.inputs = inputs;
        this.calcFunc = calcFunc;
    }

    copyWithNewValue = (name, newValue) => {
        let newInputs = Object.assign({}, this.inputs);
        newInputs[name] = newValue;
        return new Equation(this.category, this.name, this.description, this.units, newInputs, this.calcFunc);
    }

    calcAnswer = () => {
        if (Object.keys(this.inputs).every(name => this.isNumber(this.inputs[name]))) {
            return this.calcFunc(this.inputs).toLocaleString() + " " + this.units;
        }
        return '';
    }

    isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);
}

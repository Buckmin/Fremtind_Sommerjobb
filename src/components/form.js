import React, {Component} from "react"
import "../styles/form.css"
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react"
import "@fremtind/jkl-button/button.min.css"
import "./result"
import Results from "./result"


export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            distance: '',
            usage: '',
            fuel: 'diesel',
            emission:'2.68', // kg per unit
            unit: 'L/mil',
            temp: '',
            result: '0'

        }
    }

    handleDistanceChange = (event) => {
        this.setState({
            distance: event.target.value
        })

    }

    handleFuelChange = (event) => {
        switch (event.target.value) {
            case "diesel":
                var unitString= 'L/mil'
                var avgVal = '2.68'
                break;
            case "petrol":
                var unitString= 'L/mil'
                var avgVal = '2.31'
                break;
            case "electricity":
                var unitString= 'kWh/km'
                var avgVal = '1.5'
                break;
            default:
                break;
        }

        this.setState({
            fuel: event.target.value,
            unit: unitString,
            emission: avgVal,
        })
    }

    handleUsageChange = (event) => {
        this.setState({
            usage: event.target.value
        })
    }

    handleTempChange = (event) => {
        this.setState({
            temp: event.target.value
        })
    }

    tempCoeffisient() {
        const coldPetrol = ((this.state.temp < 0) && (this.state.fuel == 'petrol' ) ? 1+0.08 : 0);
        const coldDiesel = ((this.state.temp < 0) && (this.state.fuel == 'diesel' ) ? 1+0.12 : 0);
        const warmPetrol = ((this.state.temp > 23) && (this.state.fuel == 'petrol' ) ? 1-0.02 : 0);
        const warmDiesel = ((this.state.temp > 23) && (this.state.fuel == 'diesel' ) ? 1-0.03 : 0);
        var coeffs = [coldDiesel, coldPetrol,warmDiesel,warmPetrol]
        var coeff = 1;

        for (let i = 0; i < coeffs.length; i++) {
            if (coeffs[i]) {
                coeff = coeffs[i]
            }
            
        }

        return coeff
    }


    calculateCO2() {
        let T = this.tempCoeffisient();
        if (this.state.fuel == "electricity") {
            return 0
        }
        else {
        return (this.state.distance * this.state.usage * this.state.emission * T / 10)
        }
    }
    

    handleSubmit = (event) => {
        let calcEmission = this.calculateCO2()

        this.setState({
            result: calcEmission
        })

        //alert(`${this.state.distance} ${this.state.usage} ${this.state.fuel} ${this.state.emission} ${this.state.unit}  ${this.state.temp}  ${this.state.result}`)

        event.preventDefault()

    }
    


    render() {
        return (
            <div>
                <form className = 'form' onSubmit= {this.handleSubmit}>
                    <p>
                        <label > Fuel type: </label>
                        <select type = 'text' value = {this.state.fuel} onChange = {this.handleFuelChange}>
                            <option value = "diesel">Diesel</option>
                            <option value = "petrol">Petrol</option>
                            <option value = "electricity">Electricity</option>
                        </select>
                    </p>

                    <p>
                        <label > Distance: </label>
                        <input type = 'number' step="0.0001" value = {this.state.distance} onChange = {this.handleDistanceChange} placeholder="[km]"></input>
                    </p>

                    <p>
                        <label > Temperature: </label>
                        <input type = 'number' step="0.0001" value = {this.state.temp} onChange = {this.handleTempChange} placeholder="[C]"></input>
                    </p>

                    <p>
                        <label > Average fuel usage: </label>
                        <input type = 'number' step="0.0001" value = {this.state.usage} onChange = {this.handleUsageChange} placeholder={this.state.unit}></input>
                    </p>

                    <PrimaryButton className = 'PrimaryButon' type = 'submit' > Regn ut </PrimaryButton>
                </form>

                <Results myEmission = {this.state.result} />
            </div>
        )
    }
}

export default Form

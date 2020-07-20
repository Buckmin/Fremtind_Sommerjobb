// dette er en fil for forskjellige input-komponenter
import React, { Component } from "react"
import { updateUserGoal } from "../pages/dev"
import { Button } from "react-bootstrap"


export class FormForDailyGoal extends Component {
    constructor(props){
        super(props)
        this.state = {
           dailyGoal: JSON.parse(localStorage.getItem("userGoals"))["dailyGoal"]
        }
    }

    handleOnSubmit = (event) => {
        console.log("etter submit:", this.state.dailyGoal)
        updateUserGoal(parseInt(this.state.dailyGoal))
        event.preventDefault();
    }
    handleInputChange = (event) => {
        this.setState({
            dailyGoal: event.target.value
        })
    }
    render(){
        return (
            <div id="divRundtForm">
                {console.log(this.state.dailyGoal)}
                <form id="formDailyGoal" className="form" onSubmit={this.handleOnSubmit}>
                    <label>Nytt daglig mål: </label>
                    <input type="number" value={this.state.dailyGoal} placeholder="tall for daglig mål" onChange={this.handleInputChange}></input>
                    
                    <Button type="submit" >Submit</Button>
                </form>
            </div>
        )
    }
}
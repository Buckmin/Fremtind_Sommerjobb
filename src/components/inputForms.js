// dette er en fil for forskjellige input-komponenter
import React, { Component } from "react";
import { updateUserGoal } from "../pages/dev";
import { Button } from "react-bootstrap";
import { getJson } from "../getJson";

export class FormForDailyGoal extends Component {
  constructor(props) {
    super(props);

    const goal = getJson("userGoals");
    this.state = {
      dailyGoal: goal ? goal["dailyGoal"] : undefined,
    };
  }

  handleOnSubmit = (event) => {
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
              <form  id="updateDailyGoal" className="form" onSubmit={this.handleOnSubmit}>
                  <label id="dailyGoalInput" htmlFor="dailyGoal" >Sett daglig mål:
                      <input id="dailyGoal" type="number" name="dailyGoal" value={this.state.dailyGoal} placeholder="tall for daglig mål" onChange={this.handleInputChange}></input>
                  </label>
                  <Button type="submit" >Endre!</Button>
              </form>
          </div>
      )
  }
}


export class FormForDailyGoalForUser extends Component {
    constructor(props){
        super(props)
        const goal = getJson("userGoals");
        this.state = {
          dailyGoal: goal ? goal["dailyGoal"] : undefined,
        };
    }

    handleOnSubmit = (event) => {
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
                <form  id="updateDailyGoal" className="form" onSubmit={this.handleOnSubmit}>
                    <label id="dailyGoalInput" htmlFor="dailyGoal" >Sett daglig mål:
                        <input id="dailyGoal" type="number" name="dailyGoal" value={this.state.dailyGoal} placeholder="tall for daglig mål" onChange={this.handleInputChange}></input>
                    </label>
                    <Button type="submit" >Endre!</Button>
                    <p>Nytt ukentlig mål blir da: {this.state.dailyGoal * 7}</p>
                    <p>Nytt månedlig mål blir da: {this.state.dailyGoal * 30}</p>
                    <p>Nytt årlig mål blir da: {this.state.dailyGoal * 365}</p>
                </form>
            </div>
        )
    }
}

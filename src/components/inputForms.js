// dette er en fil for forskjellige input-komponenter
import React, { Component } from "react";
import { updateUserGoalLS } from "../pages/dev";
import { Button } from "react-bootstrap";
import { getJson } from "../getJson";

export class FormForDailyGoalLS extends Component {
  constructor(props) {
    super(props);

    const goal = getJson("userGoals");
    this.state = {
      dailyGoal: goal ? goal["dailyGoal"] : undefined,
    };
  }

  handleOnSubmit = (event) => {
      updateUserGoalLS(parseInt(this.state.dailyGoal))
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


export class FormForDailyGoalForUserLS extends Component {
    constructor(props){
        super(props)
        const goal = getJson("userGoals");
        this.state = {
          dailyGoal: goal ? goal["dailyGoal"] : undefined,
        };
    }

    handleOnSubmit = (event) => {
        updateUserGoalLS(parseInt(this.state.dailyGoal))
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
                    <label id="dailyGoalInput" htmlFor="dailyGoal" >Sett daglig grense:
                        <input id="dailyGoal" type="number" name="dailyGoal" value={this.state.dailyGoal} placeholder="tall for daglig grense" onChange={this.handleInputChange}></input>
                    </label>
                    <p>Ny ukentlig grense blir da: {this.state.dailyGoal * 7}</p>
                    <p>Ny månedlig grense blir da: {this.state.dailyGoal * 30}</p>
                    <p>Ny årlig grense blir da: {this.state.dailyGoal * 365}</p>
                    <p><Button variant="dark" type="submit" >Endre!</Button></p>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'

class MyForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            textValue: ".",
            skillValue:"."
        }
    }

    changeSkill = (event) =>{
        this.setState({
            textValue: event.target.value
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitted}>
            <label>Student name</label>
            <input type='text' value={this.state.textValue} onChange={this.changeMessage}></input>
            <br></br>
            <label>skill</label>
            <select value={this.state.skillValue} onChange={this.changeSkill}>
                <option>React</option>
                <option>Spring</option>
                <option>NodeJS</option>


            </select>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default MyForm

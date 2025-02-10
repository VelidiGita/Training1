import React, { Component } from 'react'
import './Styles.css'

class ClassComponent extends Component {

    constructor(props){
        super(props)

            this.state = {
                clicked:false,
                message: 'Iam attending react class'
            }
        }
         
        changeMessage = () => {
            this.setState({
                clicked: true,
                message:'thanks for coming'

            })
        }
        render(){
            let applyStyle = this.state.clicked ? 'heading2' : 'heading1'
            return (
                <div>
                    <h1 className= {applyStyle}>{this.state.message}</h1>
                    <button onClick = {this.changeNumber}></button>
                </div>
            )
        }
    }

export default ClassComponent
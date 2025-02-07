import React from 'react'
import './Styles.css'

function FunctionalComponent(props) {
    console.log(props)
    let applyStyle = props.apply ? 'heading': ''
    let inlineStyle = {
        color: 'blue',
        backgroundColor : 'yellow',
        fontSize : '25px'
    }
  return (
    <div>
        <h1 class ={`${applyStyle} font-style`}>Welcome to react class {props.clgName}, {props.city}</h1>
        {props.children}
        <h2 style = {inlineStyle}> Good afternoon</h2>
    </div>
  )
}

export default FunctionalComponent









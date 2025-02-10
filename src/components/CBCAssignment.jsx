import React from 'react';
import { useState } from 'react';

const CBCAssignment = () => {
    const [style, setStyle] = useState("light");
    const [text,setText]=useState("Hello");

    const changeStyle = () => {
        console.log("you just clicked");
        if (style !== "light") {
            setText("Hello");
            setStyle("light");
            
        }
        else{
            setText("Good morning");
            setStyle("dark");
        } 
    };
    return (
        <div className="App">
            <h1 className="geeks">CBCAssignment</h1>
            <h3 className={style}>
                {text}
            </h3>
            <button
                className="button"
                onClick={changeStyle}
            >
                Click me!
            </button>
        </div>
    );
}

export default CBCAssignment
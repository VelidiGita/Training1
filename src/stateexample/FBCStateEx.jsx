import React from 'react'

const FBCStateEx = () => {
    // const data = React.useState("HI");
    // console.log(data);

    const[value, setValue] = React.useState(0);
    console.log(value);
    const changeValue=()=>{
        setValue(1000);
    }
  return (
    <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changeValue}>changevalue</button>

        </div>
  )
}

export default FBCStateEx
import React, {useEffect, useState} from 'react'

const UseEffectEx = () => {
    // const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(100);
    //     },5000);

    //     // document.title = "MRU";
    //     document.title = count;

    // },[count])

    // ! api fetching
    const[users, setUsers] = useState([]);
        useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json().then(data=>{
           setUsers(data);
        }))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='parent'>UseEffectEx
        {/* <h1>{}</h1> */}
        {
            users.map((user, index)=>{
                return(   
                //         <h1>{user.name}</h1>
                //         <h2>{email}</h2>
                // )
                <React.Fragment>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                </React.Fragment>
                )
            } )
        }
    </div>
    )
}


export default UseEffectEx

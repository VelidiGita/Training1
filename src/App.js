// function App() {
//   return (
//     <div className="App">
//       <h1>Helooooooooooo</h1>
//     </div>
//   );
// }

// export default App;


// ! component composition:
// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Footer from './components/Footer'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'

// const App = () => {
//   return (
//     <div className = 'app'>
//       <Navbar/>
//       <Main/>
//     <div className='side1'>
//       <Sidebar1/>
//       <Sidebar2/>
//     </div>
//     <Footer/>
//     </div>
//   )
// }

// export default App

//props
// import React, { Component } from 'react'
// import CBCPropEx from './propsex/CBCPropEx'
// import FBCPropEx from './propsex/FBCPropEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx
//         username="gita"
//         age={20}
//         hobbies={["playing", "reading"]}
//         address={{city:"kothagudem", area:"ganesh temple"}}
//         sendFun={function(){alert("hi iam gita")}}
//         /> */}
//         <FBCPropEx 
//         username="abhinay"
//         isMarried={true}
//         hobbies = {["chatting", "reading", "eating", "sleeping"]}
//         />
//       </div>
//     )
//   }
// }

// import React from 'react'
// import PropChildEx from './propsex/PropChildEx'

// export const App = () => {
//   return (
//     <div>
//       <PropChildEx num = {100}>
//         <h1>this is a data</h1>
//         </PropChildEx>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import CBCStateEx from './stateexample/CBCStateEx'
// import FBCStateEx from './stateexample/FBCStateEx'
// import FunctionalComponent from './components/FunctionalComponent'
// import CBCAssignment from './components/CBCAssignment'
// import ClassComponent from './components/ClassComponent'
// import MyForm from './components/MyForm'

// const App = () => {
//   return (
//     <div>App
//       {/* <CBCStateEx/> */}
//       {/* <FBCStateEx/> */}
//       {/* <FunctionalComponent clgName="MRU" city="hyd"/> */}
//       {/* <h1>Hello, good afternoon</h1> */}
//       {/* <CBCAssignment/> */}
//       {/* <ClassComponent/> */}
//       {/* <MyForm/> */}
//     </div>
//   )
// }

// export default App

import React from 'react'
import UseEffectEx from './hookexamples/UseEffectEx'
const App = () => {
  return (
    <div>
      <UseEffectEx/>
    </div>
  )
}


export default App



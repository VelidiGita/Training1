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
import React, { Component } from 'react'
import CBCPropEx from './propsex/CBCPropEx'

export default class App extends Component {
  render() {
    return (
      <div>
        <CBCPropEx>Gita</CBCPropEx>
      </div>
    )
  }
}


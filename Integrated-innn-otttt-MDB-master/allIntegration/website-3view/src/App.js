import React from 'react';
// import './App.css';
import { BrowserRouter } from 'react-router-dom'
import HeaderComp from './Component/HeaderComp'
import SwitchComp from './Component/SwitchComp'
import FooterComp from './Component/FooterComp'

// import Listing from './Component/Listing'
const App = () => (
  <BrowserRouter>
    <HeaderComp />
    <SwitchComp />
    <FooterComp />
  </BrowserRouter>
)

// const App = () => (
//   <Listing />
// )
export default App;


// For Demo routing app remove comments on the below code block

// function App() {
//   return (
//     <BrowserRouter>
//       <App123 />
//     </BrowserRouter>
//   );
// }


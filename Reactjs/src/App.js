import React from 'react';
import './App.css';
//import Order from'./ComponentHome/order/order';
// import SearchProduct from './Home_Page/Product_search/SearchProduct';
// import Facebook from './components/Facebook';
//import Email from './Home_Page/Contact/Email';
import Callrouter from'./ComponentHome/router/Callrouter';
import { BrowserRouter as Router } from 'react-router-dom';
// import SearchP from './ComponentHome/Search/SearchP';

function App() {
  return (
    <Router >
    <div className="App">
      <Callrouter />
      {/* <SearchP /> */}
    </div>
    </Router>
    
  )
}

export default App;

//  {/* <Email /> */}
//       {/* <div className="Header">
//         <SearchProduct />
//       </div><br />

//       <Facebook></Facebook>
//       <ProductDetail />

//       <div className="Footer"><br /> </div> */}
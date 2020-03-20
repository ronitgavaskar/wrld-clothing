import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage";
// import { Route } from 'react-router-dom';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App() {
  return (
    <div>
        <Homepage />
        {/*<Route exact path="/" component={Homepage}/>*/}
    </div>
  );
}

export default App;

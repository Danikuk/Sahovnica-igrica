import React from 'react';
import Sahovnica from './components/Sahovnica';
import Kruna from "./components/Kruna.jpg";
import './App.css';
 


function App() {
  return (
    <div className="App">
     {/* <div className="wrapper">*/}
       <img src={Kruna} className="Kruna" alt=""/>
       <section>
     <Sahovnica/>
     </section>
   
     </div>
    
  );
}

export default App;

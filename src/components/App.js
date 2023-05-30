import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function handleClick() {
    setDarkMode(!darkMode)
    
  }
  const appClass = darkMode ? "App dark" : "App light"
  

  return (
    <div 
    className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={(event) => handleClick(event.target.value)}
         >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

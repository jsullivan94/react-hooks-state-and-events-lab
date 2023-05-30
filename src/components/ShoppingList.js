import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [selectedCat, setselectedCat] = useState("All")

function handleSelect(event) {
  setselectedCat(event.target.value)
}

const newItemArray = items.filter((item) => {
      if(selectedCat === "All"){
        return true
       }else 
        return item.category === selectedCat
      })


const itemsToDisplay = newItemArray.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))
      


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelect} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay}
      </ul>
    </div>
  );
}

export default ShoppingList;

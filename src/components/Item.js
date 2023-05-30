import React, { useState } from "react";

function Item({ name, category }) {

const [inCart, setInCart] = useState(false)

function handleClick() {
setInCart(!inCart)
}
const inCartClass = inCart ? 'in-cart' : ''; 
  
  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      onClick={handleClick} 
      className="add">{inCart ? 'Remove From Cart' : 'Add To Cart'}
      </button>
    </li>
  );
}

export default Item;

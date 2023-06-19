import React,{useContext} from 'react'
import { PizzaContext } from '../Context/PizzaContext'
function MenuItem({id,image,name,price}) {
  const { addToCart, cartItems } = useContext(PizzaContext);

  const cartItemCount = cartItems[id];
  return (
    <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1> 
        <p>${price}</p>
        <button className="addToCartBttn" 
        onClick={() => addToCart(id)}>
        <span class="vertical-center">Add To Cart</span> {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>

    </div>
  )
}

export default MenuItem
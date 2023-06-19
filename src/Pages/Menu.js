import React,{useContext} from 'react'
import { MenuList } from "../helpers/MenuList"; 
import MenuItem from '../Components/MenuItem';
import "../Styles/Menu.css";
import { PizzaContext } from '../Context/PizzaContext';
function Menu() {
  const { addToCart, cartItems } = useContext(PizzaContext);
  return (
    <div className="menu">
       <h1 className="menuTitle">Our Menu</h1>
       <div className="menuList">
         {MenuList.map((menuItem,key)=>{
            return <MenuItem 
            key={key}
            id={menuItem.id}
            image={menuItem.image}
             name={menuItem.name}
              price={menuItem.price}

              
        />; 
         }
         )}  
       </div>
    </div>
  )
}

export default Menu; 
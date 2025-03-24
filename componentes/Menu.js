import React from 'react';
import './Menu';

function Menu({ onAddToOrder }) {
  const menuItems = [
    { id: 1, name: 'Pizza', price: 12 },
    { id: 2, name: 'Burger', price: 8 },
  ];

  return (
    <div className='container'>
      <h2 className='menu'>Menu</h2>
      <ul className='list'>
        {menuItems.map((item) => (
          <li className='list1' key={item.id}>
            {item.name} - ${item.price}
            <button className='button1' onClick={() => onAddToOrder(item)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

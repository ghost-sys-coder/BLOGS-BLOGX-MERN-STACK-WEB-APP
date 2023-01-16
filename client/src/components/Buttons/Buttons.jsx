import React from 'react'
import items from '../../container/data';

import "./Buttons.css";

const Buttons = ({setItem, filterItem}) => {
  const menuItems = [...new Set(items.map((item)=> item.category))];


  return (
    <div className='buttons'>
      <div onClick={() => setItem(items)} className="menu-btn">all posts</div>
      {menuItems.map((item, index) => {
        return (
          <div key={index} onClick={() => filterItem(item)} className='menu-btn'>{item}</div>
        )
      })}
    </div>
  )
}

export default Buttons;
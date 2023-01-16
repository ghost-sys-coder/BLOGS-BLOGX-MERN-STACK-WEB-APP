import React, { useState } from 'react'
import { Buttons, Articles } from "../../components/index";
import items from '../../container/data';

import "./Home.css";

const Home = () => {
  const [item, setItem] = useState(items);

  const filterItem = (result) => {
    const newItem = items.filter((newVal) => {
      return newVal.category === result
    });

    setItem(newItem)
  }

  return (
    <>
    <header className='header'>
      <section className="dark-background">
        <div className="content">
          <h3>how to be an amazing designer</h3>
          <h1>INDUSTRY OF USER <br /> EXPERIENCE DESIGN</h1>
        </div>
      </section>
    </header>
    
    <section>
      <Buttons setItem={setItem} filterItem={filterItem} />
      <Articles setItem={setItem} item={item} />
    </section>
    </>
  )
}

export default Home
import React from 'react';
// import items from '../../container/data';
import SingleArticle from '../SingleArticle/SingleArticle';

import "./Articles.css"

const Articles = ({item}) => {
  return (
    <div className='container'>
      {item?.map((item) => {
        return (
          <SingleArticle key={item.title} item={item} />
        )
      })}
    </div>
  )
}

export default Articles
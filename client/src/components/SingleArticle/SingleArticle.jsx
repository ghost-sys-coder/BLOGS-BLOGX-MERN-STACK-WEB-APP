import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SingleArticle = ({ item }) => {
    const { imgUrl, title, description } = item;
  return (
      <div className='item-card'>
        <div className="image">
            <img src={imgUrl} alt="" />
        </div>
        <div className="content">
            <Link to={`/articles/:${title}`}>
            <h1>{title}</h1>
            <p className='description'>{description}<span className='dots'>...</span></p>
            </Link>
            <div className="reviews">
                <p className='views'><span>0</span> views</p>
                <p className="comments"><span>0</span> comments</p>
                <p className="votes">0 <AiOutlineHeart /></p>
            </div>
        </div>
    </div>
  )
}

export default SingleArticle
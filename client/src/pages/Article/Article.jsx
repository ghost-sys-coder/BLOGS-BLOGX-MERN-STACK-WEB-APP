import React from 'react';
import { useParams } from "react-router-dom";

import items from "../../container/data.js";
import { Navbar } from "../../components/index";

import "./Article.css";

const Article = () => {
  const { articleName } = useParams();
 

  const article = items.find(article => article.title === articleName.slice(1));
 
  const { imgUrl, title, description } = article;

  return (
    <section className="article-page">
      <Navbar />
      <div className="content">
        <h1 className="title">{title}</h1>
        <img src={imgUrl} alt="" />
        <p>{ description}</p>
      </div>
    </section>
  )
}

export default Article
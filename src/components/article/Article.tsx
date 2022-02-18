import React from 'react';
import './article.css';

const Article: React.FC<{ imgUrl?: string; date: string; title: string }> = ({
  imgUrl,
  date,
  title,
}) => {
  return (
    <div className='code_blog-container_article'>
      <div className='code_blog-container_article-image'>
        {imgUrl && <img src={imgUrl} alt='video' />}
      </div>
      <div className='code_blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Leer articulo entero</p>
      </div>
    </div>
  );
};

export default Article;

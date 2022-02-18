import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='code_blog section_padding' id='blog'>
      <div className='code_blog-heading'>
        <h1 className='gradient_text'>
          Mantente al dia sobre todo lo que esta pasando, lee los articulos.
        </h1>
      </div>
      <div className='code_blog-container'>
        <div className='code_blog-container_groupA'>
          <Article imgUrl={blog01} date='Agus 22, 2022' title='Closure' />
        </div>
        <div className='code_blog-container_groupB'>
          <Article imgUrl={blog02} date='Agus 22, 2022' title='Async await' />
          <Article imgUrl={blog03} date='Agus 22, 2022' title='Css Grid' />
          <Article imgUrl={blog04} date='Agus 22, 2022' title='Flexbox' />
          <Article imgUrl={blog05} date='Agus 22, 2022' title='Bootstrap' />
        </div>
      </div>
    </div>
  );
};

export default Blog;

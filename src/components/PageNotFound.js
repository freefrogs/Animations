import React from 'react';
import '../styles/PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page_error container">
      <h2>Sorry, something went wrong... 404</h2>
      <h3>You could see my
        <a href="https://freefrogs.github.io/AboutMe/" target="_blank" rel="noreferrer"> portfolio page </a>
        or color a geometric pet;-)
      </h3>
      <iframe title="page not found" src="https://freefrogs.github.io/EX_Canvas/"></iframe>
    </div>
  )
}

export default PageNotFound;
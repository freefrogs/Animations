import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Arrows.css';

const pages = 13;
const checkPage = () => {
  const getUrl = window.location.href.split('#/');
  const pageNo = getUrl[getUrl.length-1];
  return pageNo;
}

const nextPage = () => {
  let p = +checkPage();
  if (!p) {
    p = 1
  } else if (p === pages) {
    p = ''
  } else {
    p++
  }
  return `/${p}`;
}

const prevPage = () => {
  let p = +checkPage();
  if (p === 1) {
    p = ''
  } else if (!p) {
    p = pages;
  } else {
    p--
  }
  return `/${p}`;
}

const Arrows = () => {
  return (
    <div className="change_page_box">
      <Link className="pageArrow pageArrow-prev" to={prevPage} replace>&#8678;</Link>
      <Link className="pageArrow pageArrow-next" to={nextPage} replace>&#8680;</Link>
    </div>
  )
}

export default Arrows;
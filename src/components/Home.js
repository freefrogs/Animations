import React from 'react';
import '../styles/Home.css';

const n = 150;

const shadow = (e) => {
  const box = document.querySelector('.home');
  const title = document.querySelector('.home h1');

  const { offsetWidth: width, offsetHeight: height } = box;
  let { clientX: x, clientY: y} = e;

  const posX = Math.round((x/width * n) - (n/2));
  const posY = Math.round((y/height * n) - (n/2));
  const final = `${posX}px ${posY}px 10px rgba(255,170,33,0.7), ${posX}px ${posY * (-1)}px 10px rgb(94,45,150)`

  title.style.textShadow = final;
}

const Home = () => {
  return (
    <div className="home" onMouseMove={shadow}>
        <h1>Animations</h1>
    </div>
  )
}

export default Home;
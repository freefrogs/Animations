import React from 'react';
import { isMobile } from '../../utilities';
import '../../../styles/Anim9.css';

const getText = () => {
  let text = '';
  if (isMobile()) {
    text = 'Touch the screen';
  } else {
    text = 'Move the mouse';
  }
  return text;
}

const showPic = (e) => {
  const container = document.querySelector('.anim9');
  let x;
  let y;
  const w = window.innerWidth;
  if (e.type === 'touchstart' || e.type === 'touchmove') {
    x = e.touches[0].clientX - w*0.1;
    y = e.touches[0].clientY;
  } else {
    x = e.clientX - w*0.1;
    y = e.clientY;
  }
  container.style.setProperty('--x', `${x}px`);
  container.style.setProperty('--y', `${y}px`);
}

const Anim9 = () => {
  return (
    <div className="anim9 container" onMouseMove={showPic} onTouchStart={showPic} onTouchMove={showPic}>
      <div className='pic'></div>
      <div className='content'>
        <h2>{ getText() }</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus facilis eius dolores quaerat aperiam doloremque, numquam repudiandae dolore id porro minima eaque ratione omnis maiores optio ut repellat praesentium quia? Ipsam perspiciatis sequi perferendis, recusandae nesciunt quidem ea illo adipisci voluptatum sapiente labore a accusantium quaerat laboriosam, dolores officiis?</p>
      </div> 
    </div>
  );
}

export default Anim9;

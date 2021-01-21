import React from 'react';
import '../../../styles/Anim1.css';

const parallax = (e) => {
  const el = document.querySelector('.parallax');
  const w = window.innerWidth/2;
  const h = window.innerHeight/2;

  let mouse_w;
  let mouse_h;

  if (e.type === 'touchstart' || e.type === 'touchmove') {
    mouse_w = e.touches[0].clientX;
    mouse_h = e.touches[0].clientY
  } else {
    mouse_w = e.clientX;
    mouse_h = e.clientY;
  }

  const pos1 = `${50 - (mouse_w - w) * 0.08}% ${50 - (mouse_h - h) * 0.08}%`;
  const pos2 = `${50 - (mouse_w - w) * 0.04}% ${50 - (mouse_h - h) * 0.04}%`;
  const pos3 = `${50 - (mouse_w - w) * 0.02}% ${50 - (mouse_h - h) * 0.02}%`;
  const pos4 = `${50 - (mouse_w - w) * 0.01}% ${50 - (mouse_h - h) * 0.01}%`;
  const final_position = `${pos1}, ${pos2}, ${pos3}, ${pos4}`;
  el.style.backgroundPosition = final_position;
}

const Anim1 = () => {
    return (
      <div className="parallax container" onMouseMove={parallax} onTouchStart={parallax} onTouchMove={parallax}></div>
    )
}

export default Anim1;

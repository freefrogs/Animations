import React from 'react';
import '../../../styles/Anim4.css';

const Anim4 = () => {
  return (
    <div className="loaders container">
      <h1>Loaders</h1>
      <div className="loaders_box">
        <div className="loader loader1">
          <div className="center"></div>
          <div className="center"></div>
          <div className="center"></div>
        </div>
        <div className="loader loader2">
          <div></div>
        </div>
        <div className="loader loader3"></div>
      </div>
    </div>
  )
};

export default Anim4;
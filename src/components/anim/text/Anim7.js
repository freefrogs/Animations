import React from 'react';
import '../../../styles/Anim7.css';

class Anim7 extends React.Component {
  state = { text: 'hello world' };

  onInputChange = e => {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div className="anim7 container">
        <div className="input_box">
          <label>Enter you text:</label>
          <input 
            type="text"
            value={this.state.text}
            onChange={this.onInputChange}
          />
        </div>
        <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'rgb(94,45,150)', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: 'rgb(255,170,33)', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <text x="50%" y="50%" textAnchor="middle" fill="url(#grad)">
            {this.state.text.toLocaleUpperCase()}
          </text>
        </svg>
      </div>
    );
  }
}

export default Anim7;
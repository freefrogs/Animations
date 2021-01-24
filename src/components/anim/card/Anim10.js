import React from 'react';
import '../../../styles/Anim10.css';
import w1 from '../../../images/a10/w1.jpg';
import w2 from '../../../images/a10/w2.jpg';
import w3 from '../../../images/a10/w3.jpg';
import w4 from '../../../images/a10/w4.jpg';

const Card10 = (props) => {
  return (
    <div className="card10">
      <div className="content">
        <div className="img_box">
          <img src={props.image} alt="card"/>
        </div>
        <div className="text_box">
          <div>
            <h3>Post {props.n}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
          </div>
        </div> 
      </div>
    </div>
  )
}

class Anim10 extends React.Component {
  state = { n: -1 };

  filpCard10 = () => {
    const cards = [...document.querySelectorAll('.anim10 .content')];
    cards.forEach(card => {
      card.classList.remove('flip');
    });
    cards[this.state.n].classList.add('flip');
  }

  count = () => {
    const cards = [...document.querySelectorAll('.anim10 .content')];
    const m = this.state.n + 1;
    if (this.state.n >= cards.length - 1) {
      this.setState({ n: 0 });
    } else {
      this.setState({ n: m });
    }
    this.filpCard10();
  }

  componentDidMount() {
    this.cardInterval = setInterval(this.count, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.cardInterval);
  }

  render() {
    return (
      <div className="anim10 container">
        <h2>Nice cards!</h2>
        <div className="cards_box">
          <Card10 n="1" image={w1}/>
          <Card10 n="2" image={w2}/>
          <Card10 n="3" image={w3}/>
          <Card10 n="4" image={w4}/>
        </div>
      </div>
    );
  }
}

export default Anim10;

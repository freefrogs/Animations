import React from 'react';
import '../../../styles/Anim11.css';
import p1 from '../../../images/a11/p1.jpg';
import p2 from '../../../images/a11/p2.jpg';
import p3 from '../../../images/a11/p3.jpg';

const card_data = [
  {
    id: 1,
    name: 'plant 1',
    img: p1
  },
  {
    id: 2,
    name: 'plant 2',
    img: p2
  },
  {
    id: 3,
    name: 'plant 3',
    img: p3
  }
];

const PlantList = () => {
  return card_data.map(p => {
    return (
      <div className="card11" key={p.id}>
        <img src={p.img} alt="plant" />
        <div className="desc">
          <h3>{p.name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, itaque!</p>
        </div>
      </div>
    )
  })
}

class Anim11 extends React.Component {
  state = { n: -1 };

  animateCard = () => {
    const cards = [...document.querySelectorAll('.card11')];
    const contents = [...document.querySelectorAll('.anim11 .desc')];
    cards.forEach(c => {
      c.classList.remove('card11_flip');
    });
    contents.forEach(c => {
      c.classList.remove('desc_flip');
    });

    cards[this.state.n].classList.add('card11_flip');
    contents[this.state.n].classList.add('desc_flip');
  }

  count = () => {
    const cards = [...document.querySelectorAll('.card11')];
    let m = this.state.n;
    m >= cards.length - 1 ? m = 0 : m++;
    this.setState({ n: m });
    this.animateCard();
  }

  componentDidMount() {
    this.cardInterval = setInterval(this.count, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.cardInterval);
  }

  render() {
    return (
      <div className="anim11 container">
        <h2>Playing with reflection</h2>
        <div className="card_box">
          <PlantList />
        </div>
      </div>
    )
  }
}

export default Anim11;
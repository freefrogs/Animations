import React from 'react';
import '../../../styles/Anim12.css';
import o1 from '../../../images/a12/o1.png';
import o2 from '../../../images/a12/o2.png';
import o3 from '../../../images/a12/o3.png';

const card_data = [
  {
    id: 1,
    name: 'Origami 1',
    img: o1,
    deg1: '0deg',
    deg2: '238deg',
    deg3: '172deg'
  },
  {
    id: 2,
    name: 'Origami 2',
    img: o2,
    deg1: '210deg',
    deg2: '60deg',
    deg3: '0deg'
  },
  {
    id: 3,
    name: 'Origami 3',
    img: o3,
    deg1: '192deg',
    deg2: '60deg',
    deg3: '0deg'
  }
];

const onBtnClick = (e) => {
  const hue = e.target.dataset.deg;
  const imageClass = e.target.dataset.img;
  const image = document.querySelector(imageClass);
  image.style.filter = `hue-rotate(${hue})`;
}

const ColorBox = (props) => {
  return (
    <div className="color_box">
      <button className="btn orange" data-img={props.img} data-deg={props.deg1} onClick={onBtnClick}></button>
      <button className="btn violet" data-img={props.img} data-deg={props.deg2} onClick={onBtnClick}></button>
      <button className="btn blue" data-img={props.img} data-deg={props.deg3} onClick={onBtnClick}></button>
    </div>
  )
}

const CardList = () => {
  return card_data.map(c => {
    return (
      <div className="card" key={c.id}>
        <img className={`img${c.id}`} src={c.img} alt="origami" />
        <div className="card_desc center">
          <h3>{c.name}</h3>
          <ColorBox img={`.img${c.id}`} deg1={c.deg1} deg2={c.deg2} deg3={c.deg3} />
          <button className="cta">Buy now</button>
        </div>
      </div>
    )
  })
}

class Anim12 extends React.Component {
  render() {
    return (
      <div className="anim12">
        <h2>Playing with filters and gradients</h2>
        <div className="cards_box">
          <CardList />
        </div>
      </div>
    )
  }
}

export default Anim12;
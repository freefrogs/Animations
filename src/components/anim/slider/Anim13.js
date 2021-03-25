import { useState } from 'react';
import '../../../styles/Anim13.css';
import p1 from '../../../images/a13/p1.jpg';
import p2 from '../../../images/a13/p2.jpg';
import p3 from '../../../images/a13/p3.jpg';
import p4 from '../../../images/a13/p4.jpg';

const pots = [
  {
    id: 0,
    name: "blue pot",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: p1
  },
  {
    id: 1,
    name: "white pot",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: p2
  },
  {
    id: 2,
    name: "painted pot",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    img: p3
  },
  {
    id: 3,
    name: "decoupage pot",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    img: p4
  }
];

const DotsList = ({onDotClick}) => {
  return pots.map(d => {
    return (
      <div className={d.id === 0 ? "dot active13" : "dot"} key={d.id} data-dot={d.id} onClick={onDotClick}>
        <img className="dot_img" src={d.img} alt="plant pot" />
        <h4 className="dot_name">{d.name}</h4>
      </div>
    )
  })
}

const Anim13 = () => {
  const [slide, setSlide] = useState(0);

  const onSliedeChange = (e) => {
    const card13 = document.querySelector('.card13');
    card13.classList.remove('entry13');
    
    const dots = [...document.querySelectorAll('.dot')];
    dots.forEach(d => {
      d.classList.remove('active13');
    });

    e.currentTarget.classList.add('active13');
    const n = e.currentTarget.dataset.dot;
    setTimeout(() => {
      setSlide(n);
      card13.classList.add('entry13');
    }, 300);
  }

  return (
    <div className="anim13">
      <div className="card13 entry13">
        <img className="product13_img entry_child-top" src={pots[slide].img} alt={pots[slide].name} />
        <div className="product13">
          <h2 className="product13_name entry_child-right">{pots[slide].name}</h2>
          <p className="product13_desc entry_child-right">{pots[slide].desc}</p>
        </div>
      </div>
      <div className="dots">
        <DotsList onDotClick={onSliedeChange} />
      </div>
    </div>
  )
}

export default Anim13;
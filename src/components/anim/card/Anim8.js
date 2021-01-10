import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Anim8.css';

const Card = (props) => {
  return (
    <div className="card">
      <span className={props.name}></span>
      <span className={props.name}></span>
      <span className={props.name}></span>
      <div>
          <h2>{props.title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Link className={props.button} to="/7">Read More</Link>
      </div>
    </div>
  )
}

class Anim8 extends React.Component {
  state = { border: 'button3'}
  onButtonClick = e => {
    this.setState({ border: e.target.dataset.border});
    const buttons = [...document.querySelectorAll('.button')];
    buttons.forEach(b => {
      b.classList.remove('active');
    });
    e.target.classList.add('active');
  }
  render() {
    return (
      <div className="anim8 container">
        <div className="choose_box">
          <h2>Choose border:</h2>
          <div className="button_box">
            <button className="button button1" data-border="button1" onClick={this.onButtonClick}>border 1</button>
            <button className="button button2" data-border="button2" onClick={this.onButtonClick}>border 2</button>
            <button className="button button3 active" data-border="button3" onClick={this.onButtonClick}>border 3</button>
          </div>
        </div>
        <div className="cards_box">
          <Card name={"center " + this.state.border} title="Card 1" button={"button " + this.state.border}/>
          <Card name={"center " + this.state.border} title="Card 2" button={"button " + this.state.border}/>
          <Card name={"center " + this.state.border} title="Card 3" button={"button " + this.state.border}/>
        </div>
      </div>
    )
  }
}

export default Anim8;
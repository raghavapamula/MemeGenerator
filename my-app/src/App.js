import React, { Component } from 'react';
import Carousel from './Carousel.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {choice: "https://images.pexels.com/photos/6406/sun-moon-eclipse-march-2015.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
  }
  render() {
    let choices =
    ["http://i0.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg",
    "https://pixel.nymag.com/imgs/daily/following/2015/11/06/loss.nocrop.w710.h2147483647.jpg",
    "http://i0.kym-cdn.com/photos/images/facebook/001/090/170/192.png",
    "https://i.imgflip.com/2/1bij.jpg",
    "https://i.imgflip.com/2/1ur9b0.jpg",
    "https://i.imgflip.com/2/1otk96.jpg",
    "https://i.imgflip.com/2/1yxkcp.jpg",
    "https://i.imgflip.com/2/9ehk.jpg"];
    let setTemplate = obj => {this.setState({choice:obj.target.src});}
    return (
      <div>
        <TemplateChoices choices={choices} makeChoice={obj => setTemplate(obj)} />
        <Meme image={this.state.choice} />
      </div>
    );
  }
}

class TemplateChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {rightHover: false, leftHover: false};
  }

  startLeftSlide() {
    while(true) {
      if(document.getElementById('0').clientWidth == 0) {

      }
    }
  }

  stopLeftSlide() {

  }

  startRightSlide() {

  }

  stopRightSlide() {

  }

  createChoices = () => {
    var i = 0;
    let formats = [];
    for(i = 0; i < this.props.choices.length; i++) {
      formats.push(
            <div className="col-xs-4">
              <img className="format" id={i} src= {this.props.choices[i]} onClick= {(e) => this.props.makeChoice(e)} />
            </div>
      );
    }
    return formats;
  }

  render() {
    return (
      <div className="container group">
        <div className="row">
          <Carousel images={this.createChoices()} />
        </div>
      </div>
    );
  }
}

class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {topCaption: "", bottomCaption: "", imgUrl: this.props.image};
  }

  render() {
    return (
    <div>
      <p> {this.state.topCaption} </p>
        <Template image = {this.props.image}/>
      <p> {this.state.bottomCaption} </p>
    </div>
    );
  }
}

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {imgUrl: this.props.image, topText: "Top Text", bottomText: "Bottom Text"};
  }

  updateTopText(e) {
    this.setState({imgUrl: this.props.image, topText: e, bottomText: this.state.bottomText});
  }

  updateTopText(e) {
    this.setState({imgUrl: this.props.image, topText: this.state.topText, bottomText: e});
  }

  render() {
    return (
      <div className="container">
        <p className="caption top" onChange={(e) => this.updateTopText()}> Top Text </p>
        <img className="template" src={this.props.image} />
        <p className="caption bottom" onClick={(e) => this.updateBottomText()}> Bottom Text </p>
      </div>
    );
  }
}

export default App;

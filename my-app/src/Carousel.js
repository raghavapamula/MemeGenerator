import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {images: this.props.images};
  }

  render() {
    let renderImages = ()=>{
      let images=[];
      for(let i=0; i<this.state.images.length;i++) {images.push(<img class="carImg" src={this.state.images[i]} />)}
      return images;
    }

    let right = () => {
      let temp = this.state.images[0];
      this.setState({images: this.state.images.shift().push(temp)});
    }

    let left = () => {
      let temp = this.state.images[0];
      this.setState({images: this.state.images.shift().push(temp)});
    }

    return(
      <div className="Frame">
        {this.state.images}
      </div>
    );
  }
}

export default Carousel;

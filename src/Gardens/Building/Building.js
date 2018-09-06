import React, { Component } from 'react';
import './Building.scss';
import Hammer from 'hammerjs';

import { connect } from 'react-redux';
import { fetchBuilding } from '../../actions/buildingsAction';

import history from '../../history';

class Building extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fps: 1000/25,
      currentSVG: [],
      images: [],
      currentActiveImageIndex: 0,
    }
    
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.setSvg = this.setSvg.bind(this);
  }


  render() {
    const activeImgStyle = {
      display: 'block',
      zIndex: 99
    }

    const images = this.state.images.map((img, i) => (
      <img key={i} src={img.src} style={(this.state.currentActiveImageIndex === i) ? activeImgStyle : {}} alt="Building img"/>
    ));

    const svg = this.state.currentSVG.map((el, i) => (
      <polygon key={i} onClick={this.showFloor} points={el} />
    ));

    return (
      <div className="building" ref="building">
        <div className="building_slides">
          {images}
        </div>

        <svg viewBox="0 0 1920 1080">
          {svg}
        </svg>

        <div className="building_controllers">
          <button className="building_nextSlide" onClick={this.nextSlide}>Next</button>
          <button className="building_prevSlide" onClick={this.prevSlide}>Prev</button>
        </div>
      </div>
    )
  }

  componentWillMount() {
    // Fetching data
    this.props.fetchBuilding(this.props.match.params.lot); 
  }

  componentWillReceiveProps(props) {
    this.setState({
      images: props.building.images
    })
  }

  componentDidMount() {
    this.setSvg();

    // Mounting hammerjs
    this.hammer = Hammer(this.refs.building);
    this.hammer.on('swipeleft', this.nextSlide);
    this.hammer.on('swiperight', this.prevSlide);
  }

  componentWillUnmount() {
    // Unmounting hammerjs
    this.hammer.off('swipeleft', this.prevSlide);
    this.hammer.off('swiperight', this.nextSlide);
  }

  showFloor() {
    history.push({ 
      pathname:'/gardens/buildings/building/floor',
      floor: 'first'
    });
  }

  nextSlide() {
    console.log('next');
    const interval = setInterval(() => {
      this.setState((state) => {
        const newState = {...state},
              i =  newState.currentActiveImageIndex,
              nextI = (i === newState.images.length - 1) ? 0 : i+1;

        newState.images[i].active = false;
        newState.currentActiveImageIndex = nextI;

        if(newState.images[nextI].step) {
          clearInterval(interval);
        }

        // Need this trick because state updates after 'return newState'
        setTimeout(this.setSvg, 0);

        return newState;
      })
    }, this.state.fps);
  }

  prevSlide() {
    console.log('prev')
    const interval = setInterval(() => {
      this.setState((state) => {
        const newState = Object.create(state),
              i =  state.currentActiveImageIndex,
              nextI = (i === 0) ? state.images.length-1 : i-1;

        newState.images[i].active = false;
        newState.currentActiveImageIndex = nextI;
        
        
        if(state.images[nextI].step) {
          clearInterval(interval);
        } 
        
        setTimeout(this.setSvg, 0);

        return newState;
      })
    }, this.state.fps);
  }

  setSvg() {
    if(!this.state.images.length) return;
    const i = this.state.currentActiveImageIndex;
    this.setState({
      currentSVG: this.state.images[i].svg ? this.state.images[i].svg : []
    })
  }
}

const mapStateToProps = state => {
  return {
    building: {...state.buildings}
  }
}


export default connect(mapStateToProps, { fetchBuilding })(Building);
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import './Mainpreloader.scss';

class Mainpreloader extends Component {
  render() {
    return (
      <CSSTransition
        in={!this.props.isReady}
        timeout={1000}
        classNames="fade"
      >
        <div className="mainpreloader">
          <h1>The Component is still loading</h1>
        </div>
      </CSSTransition>
    )
  }

  componentWillReceiveProps() {
    if( !this.props.isReady ) {
      setTimeout( this.props.unmountMe, 1000)
    }
  }
}


const mapStateToProps = state => {
  return {
    isReady: state.media.isReady
  }
}


export default connect(mapStateToProps)(Mainpreloader);
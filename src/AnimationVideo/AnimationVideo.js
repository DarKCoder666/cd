import React, { Component } from 'react';

import './AnimationVideo.scss';

import history from '../history';

class AnimationVideo extends Component {
    render() {
        return (
            <div className="animationVideo">
                <video src={this.props.videoSrc} autoPlay></video>
            </div>
        )
    }

    componentDidMount() {
        this.startTimer()
    }

    componentWillUnmount() {
        clearTimeout(this.state.timerID);
    }

    startTimer() {
        this.setState({
            timerID: setTimeout(() => {
                        history.push(this.props.redirect);
                        }, this.props.delay)
                     })
    }
}

export default AnimationVideo;
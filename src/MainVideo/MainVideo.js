import React, { Component } from 'react';
import './MainVideo.scss';
import { CSSTransition } from 'react-transition-group';

export default class MainVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true
        }

        this.onmousewheel = this.onmousewheel.bind(this);
    }

    render() {
        return (
            <CSSTransition
                in={this.state.isVisible}
                timeout={1000}
                classNames="mainVideoFade"
            >
                <div className="mainVideo">
                    <video autoPlay muted>
                        <source src="videos/tempvideo.mp4" type="video/mp4" />
                    </video>
                </div>
            </CSSTransition>
        )
    }

    componentWillMount() {
        document.addEventListener('mousewheel', this.onmousewheel);
    }

    componentWillUnmount() {
        document.removeEventListener('mousewheel', this.onmousewheel);
    }

    onmousewheel() {
        this.setState({
            isVisible: false
        });

        setTimeout(this.props.unmountMe, 1000);
    }
}
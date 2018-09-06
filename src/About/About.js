import React, { Component } from 'react';
import './About.scss';


import { CSSTransition } from 'react-transition-group';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainImgStyle: {},
            currentSlide: 0,
            amountOfSlides: 2
        }

        this.canScroll = true;

        this.mouseWheelHandler = this.mouseWheelHandler.bind(this);
    }

    render() {
        return (
            <section className="about">
                <MainSlide currentSlide={this.state.currentSlide} />
                <section className="fullSize"></section>
            </section>
        )
    }

    componentDidMount() {
        document.addEventListener('mousewheel', this.mouseWheelHandler, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousewheel', this.mouseWheelHandler, false);
    }

    mouseWheelHandler(e) {
        const direction = detectMouseWheelDirection(e);
        
        if(!this.canScroll) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            return false;
        }

        if(direction === 'up') {
            // Scrolling up
            if( window.scrollY === 0 ) {
                this.setState({
                    currentSlide: 0
                });
            }
        } else if(direction === 'down') {
            // Scrolling down
            if( window.scrollY === 0 && this.state.currentSlide !== 1 ) {
                const that = this;

                this.setState({
                    currentSlide: 1
                });

                this.canScroll = false;
                e.preventDefault();

                setTimeout(() => {
                    that.canScroll = true;
                }, 500)
            }
        }
    }
}

// This component includes first two slides
class MainSlide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgFirst: {},
            imgSecond: {
                top: 100,
                bottom: 0,
                height: 'calc(100% - 100px)',
                width: '50%'
            },
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <img style={
                        (this.props.currentSlide) ? this.state.imgSecond : this.state.imgFirst
                    } src='./img/about_main_img.png' className="mainImg" alt="img "/>
                    
                    <section className="fullSize about_header">
                        <CSSTransition
                            in={this.props.currentSlide === 0}
                            classNames={{
                                enterDone: 'fadeInUp',
                                exitDone: 'fadeOutDown',
                            }}
                            appear={true}
                            timeout={0}>
                            <div className="row animated first_slide_content">
                                <h1 className="offset-1">
                                    Давайте <br/>знакомиться
                                </h1>
                            </div>
                        </CSSTransition>
                        
                        <CSSTransition
                            in={this.props.currentSlide === 1}
                            classNames={{
                                enterDone: 'fadeInUp',
                                exitDone: 'fadeOutDown',
                            }}
                            appear={true}
                            timeout={0}>
                            <div className="row animated second_slide_content">
                                <div className="offset-8 col-3">
                                    <h1>О нас</h1>
                                    <p>Dream City — это девелоперский строительный бренд, занимающийся проектировкой и реализацией недвижимости премиум класса</p>
                                    <p>Dream City — это девелоперский строительный бренд, занимающийся проектировкой и реализацией недвижимости премиум класса</p>
                                    <p>Dream City — это девелоперский строительный бренд, занимающийся проектировкой и реализацией недвижимости премиум класса</p>
                                </div>
                            </div>
                        </CSSTransition>
                    </section>
                </div>
            </div>
        );
    }
}

export default About;

function detectMouseWheelDirection( e ) {
    var delta = null,
    direction = false
    ;
    if ( !e ) { // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if ( e.wheelDelta ) { // will work in most cases
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}
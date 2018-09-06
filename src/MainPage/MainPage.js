import React, {Component} from 'react';
import './MainPage.scss';

import history from '../history';


class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bodyStyles: {},
            showGardensAnimation: false,
            showOfficeAnimation: false,
            fullW: 0,
            cardsState: [
                true,   // Gardens
                false,  // About
                false,  // Boulevard
                false   // Grand Park
            ],
            sliderID: 0,
            sliderDelay: 2000,
        }

        this.showGardens = this.showGardens.bind(this);
        this.showSaleoffice = this.showSaleoffice.bind(this);
        this.setOverflow = this.setOverflow.bind(this);
        this.initSlider = this.initSlider.bind(this);
    }

    render() {
        const videoStyles = {
            zIndex: 1
        };

        const cards = {
            grandPark: {
                left: this.state.fullW * 0.489,
                top: this.state.fullW * 0.489 * 0.416
            },
            gardens: {
                left: this.state.fullW * 0.378,
                top: this.state.fullW * 0.378 * 0.702
            },
            about: {
                left: this.state.fullW * 0.528,
                top: this.state.fullW * 0.528 * 0.704
            },
            boulevard: {
                left: this.state.fullW * 0.648,
                top: this.state.fullW * 0.648 * 0.408
            }        
        };
        
        return (
            <section className="mainPage" ref="mainP">

                <div className="map h-100">
                    <div className="bg">
                        <img src="/img/GRD_start.jpg" alt="" useMap="#Map"/>
                        <video style={(this.state.showGardensAnimation) ? videoStyles : {}} ref="gardensVideo" src="/videos/To_GRD.mp4"></video>
                        <video style={(this.state.showOfficeAnimation) ? videoStyles : {}} ref="officeVideo" src="/img/animations/office.mp4"></video>
                    </div>

                    <svg viewBox="0 0 1920 1080" ref="svg">
                        <polygon onClick={this.showGardens} points="477,502,910,741,1107,632,654,426"></polygon>
                        <polygon onClick={this.showSaleoffice} points="917,744,1003,699,1091,744,1002,793"></polygon>
                        <polygon points="964,578,1339,405,1422,441,1482,414,1587,451,1185,680"></polygon>
                        <polygon points="623,415,964,575,1264,437,922,303"></polygon>
                    </svg>

                    <div className="cards">
                        <div className={"grandPark_card " + ( this.state.cardsState[0] ? "active_card" : "" )} style={cards.gardens}>Gardens</div>
                        <div className={"grandPark_card " + ( this.state.cardsState[1] ? "active_card" : "" )} style={cards.about}>О нас</div>
                        <div className={"grandPark_card " + ( this.state.cardsState[2] ? "active_card" : "" )} style={cards.boulevard}>Boulevard</div>
                        <div className={"grandPark_card " + ( this.state.cardsState[3] ? "active_card" : "" )} style={cards.grandPark}>Grand Park</div>
                    </div>

                    <div className="mainPage_content">
                        <div className="container">
                            <div className="row position-relative">
                                <div className={"col-3 offset-1 main_page_content_wrap " + ( this.state.cardsState[0] ? "active_card" : "" )}>
                                    <h1>Узнайте подробнее<br/>о Gardens</h1>
                                    <p>Добро пожаловать в город мечты — <b>Dream City!</b> <br/> Жильё премиум класса в Ташкент Сити.</p>
                                    <div className="main_page_learnMoreBtn"> <span> О Gardens <i className="fas fa-angle-right"></i> </span> </div>
                                </div>

                                <div className={"col-3 offset-1 main_page_content_wrap " + ( this.state.cardsState[1] ? "active_card" : "" )}>
                                    <h1>Узнайте подробнее<br/>о компании</h1>
                                    <p>Добро пожаловать в город мечты — <b>Dream City!</b> <br/> Жильё премиум класса в Ташкент Сити.</p>
                                    <div className="main_page_learnMoreBtn"> <span> О компании <i className="fas fa-angle-right"></i> </span> </div>
                                </div>

                                <div className={"col-3 offset-1 main_page_content_wrap " + ( this.state.cardsState[2] ? "active_card" : "" )}>
                                    <h1>Узнайте подробнее<br/>о Boulevard</h1>
                                    <p>Добро пожаловать в город мечты — <b>Dream City!</b> <br/> Жильё премиум класса в Ташкент Сити.</p>
                                    <div className="main_page_learnMoreBtn"> <span> О Boulevard <i className="fas fa-angle-right"></i> </span> </div>
                                </div>

                                <div className={"col-3 offset-1 main_page_content_wrap " + ( this.state.cardsState[3] ? "active_card" : "" )}>
                                    <h1>Узнайте подробнее<br/>о Grand Park</h1>
                                    <p>Добро пожаловать в город мечты — <b>Dream City!</b> <br/> Жильё премиум класса в Ташкент Сити.</p>
                                    <div className="main_page_learnMoreBtn"> <span> О Grand Park <i className="fas fa-angle-right"></i> </span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    showGardens() {
        history.push('/animations/gardens');
        // var that = this;
        // this.setState({
        //     showGardensAnimation: true
        // });
        
        // this.props.hiddenBecauseOfAnimation = true;
        // this.props.changeVisibility(false);
        // this.refs.gardensVideo.play();
        
        // setTimeout(() => {
        //     that.setState({
        //         showGardensAnimation: false
        //     });
        //     history.push('/gardens');
        // }, 3000);
    }

    showSaleoffice() {
        history.push('/animations/about');
        // var that = this;
        // this.setState({
        //     showOfficeAnimation: true
        // });
        
        // this.refs.svg.style.display = 'none';
        // this.refs.officeVideo.play();
        
        // setTimeout(() => {
        //     that.setState({
        //         showOfficeAnimation: false
        //     });
        //     history.push('/about');
        // }, 3000);
    }

    componentDidMount() {
        this.setOverflow();

        // Set fullsize height and width to mainPage element
        window.addEventListener('resize', this.setOverflow);

        // Initializing slider
        this.setState({
            sliderID: this.initSlider()
        })
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.setOverflow);
        document.body.style.overflow = 'visible';

        clearInterval( this.state.sliderID );
    }
    
    onWindowResize() {
        this.setState({
            containerML: getComputedStyle(this.refs.container).marginLeft
        });
    }
    
    setOverflow() {
        let clW = document.documentElement.clientWidth;
        let clH = document.documentElement.clientHeight;
        
        
        if (clH / clW > 0.45) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        this.setState({
            fullW: clW
        });
    }

    initSlider() {
        
        return setInterval(() => {
            const cardsState = this.state.cardsState;
            let newCardsState = cardsState.slice();

            cardsState.map((el, i) => {
                if(el) {
                    const nextSlide = (i + 1 === cardsState.length) ? 0 : (i + 1);
                    newCardsState[i] = false;
                    newCardsState[nextSlide] = true;

                    this.setState(state => ({
                        cardsState: newCardsState
                    }))
                }
                return el;
            });
        }, this.state.sliderDelay)
    }
}

export default MainPage;

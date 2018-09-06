import React, {Component} from 'react';
import './Header.scss';

import { Router, Link } from 'react-router-dom';

import history from '../history';

import phoneLogo from './phone.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoColor: this.props.logoColor,
            containerML: 0
        }

        this.hamburgerHandler = this.hamburgerHandler.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
    }

    render() {
        let logo;

        if( this.state.logoColor === 'light' ) {
            logo = <img src="/img/dc-logo-light.svg" alt=""/>;
        } else {
            logo = <img src="/img/dc-logo-dark.svg" alt=""/>;
        }

        // Setting position fixed elements cords
        let logoStyles = {};
        let hamburgerStyles = {};
        let socialsStyles = {};
        let phoneStyles = {};

        if(this.refs.container) {
            const containerML = this.state.containerML;
        
            logoStyles = {
                left: containerML
            }

            hamburgerStyles = {
                right: containerML
            }
        
            socialsStyles = {
                left: containerML
            }

            phoneStyles = {
                right: containerML
            }
        }

        return (
            <div className="header_main_wrap">
                <div className="container" ref="container"></div>
                    <Router history={history}>
                        <div className="fixed_items">
                            <div className="fixed_logo" style={logoStyles}>
                                <Link to="/">{logo}</Link>
                            </div>

                            <div className="fixed_hamburger" style={hamburgerStyles} >
                                <i className="fas fa-bars"></i>
                            </div>

                            <div className={"fixed_socials fixed_elements" + this.state.logoColor} style={socialsStyles}>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                            </div>

                            <div className="header_phone_wrap_fixed" style={phoneStyles}>
                                <span className="header_phone">
                                    <span>(+998 97)</span>
                                    202-22-22
                                </span>
                                <span className="header_phone_icon">
                                    <img src={phoneLogo} alt=""/>
                                </span>
                            </div>
                        </div>
                    </Router>
                {/* <div style={menuStyles} className="header_menu_wrap">
                    <div className="container h-100">
                        <div className="row header_menu h-100">
                            <Router history={this.props.history}>
                                <div>
                                    <h1><Link to="/">Главная</Link></h1>
                                    <h1><Link to="/about">О нас</Link></h1>
                                    <h1><Link to="/news">Новости</Link></h1>
                                    <h1><Link to="/contacts">Контакты</Link></h1>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
                <div style={menuStyles} className="black_block"></div> */}
            </div>
        )
    }

    componentDidMount() {
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize);
    }

    hamburgerHandler() {
        this.setState({
            isMenuOpened: !this.state.isMenuOpened
        })

        if( !this.state.isMenuOpened ) {
            this.setState({
                logoColor: 'light'
            })
        } else {
            this.setState({
                logoColor: 'dark'
            }) 
        }
    }

    onWindowResize() {
        this.setState({
            containerML: getComputedStyle(this.refs.container).marginLeft
        });
    }
}

export default Header;
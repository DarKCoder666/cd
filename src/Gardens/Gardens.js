import React, { Component } from 'react'
import { Router, Link } from 'react-router-dom';

import history from '../history';

import './Gardens.scss';

class Gardens extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="gardens">
                    <img src="/img/GRD_fin.jpg" alt="" />
                    <div className="container">
                        <div className="gardens_links">
                            <h1> <Link to="/gardens/presentation"> Презентация </Link> </h1>
                            <h1> <Link to="/animations/buildings"> Выбор квартир </Link> </h1>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }

    goToBuildings() {
        history.push('/animations/buildings');
    }

    goToPresentation() {
        history.push('/gardens/presentation');
        // history.push('/animations/presentation');
    }
}

export default Gardens;
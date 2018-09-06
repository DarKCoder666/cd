import React, { Component } from 'react';
import './App.scss';

import { Router, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import history from './history';
import store from './store';

import { loadMedia } from './actions/mediaAction';

import MainPage from './MainPage/MainPage';
import Header from './Header/Header';
import About from './About/About';
import Gardens from './Gardens/Gardens';
import Presentation from './Gardens/Presentation/Presentation';
import Buildings_asd from './Gardens/Buildings/Buildings';
import Building from './Gardens/Building/Building';
import Mainpreloader from './MainPreloader/Mainpreloader';
import MainVideo from './MainVideo/MainVideo';

import AnimationVideo from './AnimationVideo/AnimationVideo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header_logo_color: 'light',
            showMainPreloader: true,
            showMainVideo: false
        };

        this.setLogoColor = this.setLogoColor.bind(this);
        this.unmountVideo = this.unmountVideo.bind(this);
        this.unmountMainPreloader = this.unmountMainPreloader.bind(this);

    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header history={history} logoColor={this.state.header_logo_color} ></Header>

                    {this.props.isReady &&
                        <Router history={history}>
                            <Route
                                onChange
                                render={({ location }) => (
                                    <div>
                                        <Switch location={location}>
                                            <Route path="/" exact component={MainPage} />
                                            <Route path="/about" component={About} />
                                            <Route path="/gardens" exact component={Gardens} />
                                            <Route path="/gardens/presentation" component={Presentation} />
                                            <Route path="/gardens/buildings" exact component={Buildings_asd} />
                                            <Route path="/gardens/buildings/building/:lot" component={Building} />
                                            <Route path="/animations/gardens"
                                                render={(props) => <AnimationVideo redirect="/gardens" videoSrc="/videos/To_GRD.mp4" delay={3000} {...props} />}
                                            />
                                            <Route path="/animations/about"
                                                render={(props) => <AnimationVideo redirect="/about" videoSrc="/videos/To_Office.mp4" delay={3000} {...props} />}
                                            />
                                            <Route path="/animations/buildings"
                                                render={(props) => <AnimationVideo redirect="/gardens/buildings" videoSrc="/videos/To_Buy.mp4" delay={3000} {...props} />}
                                            />
                                            <Route render={() => <div>Not Found</div>} />

                                        </Switch>
                                        {this.state.showMainVideo && <MainVideo unmountMe={this.unmountVideo} />}
                                    </div>
                                )}
                            />
                        </Router>
                    }

                    {this.state.showMainPreloader ? <Mainpreloader unmountMe={this.unmountMainPreloader} /> : null}

                </div>
            </Provider>
        );
    }

    componentWillMount() {
        // Первая инициализация записи цепочки переходов по станицам
        this.updateHistoryChain();

        // При каждом изменении url, вызываем метод отвечающий за запись истории
        history.listen((location, action) => {
            this.updateHistoryChain(location.pathname);
        });

        // Прогрузка необходимых медиа, перед показом страницы
        this.props.loadMedia('/');
    }

    componentDidMount() {
        this.setLogoColor(history.location.pathname);

        history.listen(this.setLogoColor);
    }

    updateHistoryChain(loc = history.location.pathname) {
        const chain_str = sessionStorage.getItem('historyChain') || '';
        const chain_arr = chain_str.split(',');

        // Если это первый вход на сайт, то мы отображаем видео, иначе нет.
        this.setState({
            showMainVideo: (chain_str === '' && history.location.pathname === '/') ? true : false
        });

        // Если в url есть '/animations/', то мы его игнорируем для записи в цепочку истории(история перехода по страницам)
        if (chain_arr[chain_arr.length - 1] !== loc && loc.indexOf('/animations/') === -1) {
            chain_arr.push(loc);
        }

        // Устанавливаем новое значение в sessionStorage
        sessionStorage.setItem('historyChain', chain_arr);
    }

    unmountVideo() {
        this.setState({
            showMainVideo: false
        })
    }

    unmountMainPreloader() {
        this.setState({
            showMainPreloader: false
        })
    }

    setLogoColor(location, action) {
        switch (location.pathname) {
            case '/about':
                this.setState({ header_logo_color: 'light' });
                break;
            case '/':
                this.setState({ header_logo_color: 'dark' });
                break;
            default:
                this.setState({ header_logo_color: 'dark' });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isReady: state.media.isReady
    }
}

const CONNECT = connect(mapStateToProps, { loadMedia })(App);

export default App = (props) => {
    return <CONNECT {...props} store={store} />
}
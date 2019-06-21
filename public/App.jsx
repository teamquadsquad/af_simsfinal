import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import Body from './components/body';
import Footer from './components/footer';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    render() {
        return(
            <React.Fragment>

                <NavBar />

                <Body />

                <Footer/>

            </React.Fragment>
        );
    }
}

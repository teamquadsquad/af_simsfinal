import React, {Component} from 'react';
import Home from "./home";
import SignIn from "./sign_in";
import Courses from "./courses";
import SignUp from "./sign_up";
import CreateAdmin from "./createAdmin";
import Admin from "./admin";
import { Route, Link, Switch } from 'react-router-dom';

class Body extends Component {
    render() {
        return (
            <div className="container mt-3">
                <Switch>
                    <Route path="/sign_in" component={SignIn} ></Route>
                    <Route path="/sign_up" component={SignUp} ></Route>
                    <Route path="/courses" component={Courses} ></Route>
                    <Route path="/Admin" component={Admin} ></Route>
                    <Route path="/createAdmin" component={CreateAdmin} ></Route>
                    <Route exact path="/" component={Home} ></Route>
                </Switch>
            </div>
        );
    }
}

export default Body;
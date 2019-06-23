import React, {Component} from 'react';
import Home from "./home";
import SignIn from "./sign_in";
import Courses from "./courses";
import Signup from "./signup";
import AdminCreate from "./createAdmin";
import Instructor from "./instructor";
import AssignInstructor from "./assignInstructor";

import { Route, Link, Switch } from 'react-router-dom';

class Body extends Component {
    render() {
        return (
            <div className="container mt-3">
                <Switch>
                    <Route path="/sign_in" component={SignIn} ></Route>
                    <Route path="/sign_up" component={Signup} ></Route>
                    <Route path="/courses" component={Courses} ></Route>
                    <Route path="/adminCreate" component={AdminCreate} ></Route>
                    <Route path="/instructor" component={Instructor} ></Route>
                    <Route path="/assignInstructor" component={AssignInstructor} ></Route>
                    <Route exact path="/" component={Home} ></Route>
                </Switch>
            </div>
        );
    }
}

export default Body;
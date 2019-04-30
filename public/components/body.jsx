import React, {Component} from 'react';
import Home from "./home";
import SignIn from "./sign_in";
import Courses from "./courses";
import Signup  from "./signup";
import AdminCreate from "./createAdmin";
import Instructor from "./instructor";
import AssignInstructor from "./assignInstructor";
<<<<<<< HEAD
import Admins from "./adminDashboard";
=======
import Assignment from "./assignmentsComponent";
>>>>>>> 8bb591241e742102e7eb493d515111812d81e633

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
<<<<<<< HEAD
                    <Route path="/admin_dashboard" component={Admins} ></Route>
=======
                    <Route path="/assignments" component={Assignment} ></Route>
>>>>>>> 8bb591241e742102e7eb493d515111812d81e633
                    <Route exact path="/" component={Home} ></Route>
                </Switch>
            </div>
        );
    }
}

export default Body;
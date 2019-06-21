import React, {Component} from 'react';
import AddRoom from "./addRoom";
import ViewAllRooms from "./viewAllRooms";
import Rooms from "./rooms";
import AddCategory from "./addCategory";
import ViewAllCat from "./viewAllCat";
import Categories from "./categories";
import Home from "./home";
import SignIn from "./sign_in";
import Courses from "./courses";
import { Route, Link, Switch } from 'react-router-dom';

class Body extends Component {
    render() {
        return (
            <div className="container mt-5">
                <Switch>
                    <Route path="/sign_in" component={SignIn} ></Route>
                    <Route path="/courses" component={Courses} ></Route>
                    <Route exact path="/" component={Home} ></Route>
                </Switch>
            </div>
        );
    }
}

export default Body;
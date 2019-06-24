import React, {Component} from 'react';
import Home from "./home";
import SignIn from "./sign_in";
import Courses from "./courses";
import Signup  from "./signup";
import AdminCreate from "./createAdmin";
import Instructor from "./instructor";
import AssignInstructor from "./assignInstructor";
import Admins from "./adminDashboard";
import CoursesDashboard from "./courseDashboard";
import InstructorsDashboard from "./instructorDashboard.jsx";
import Assignment from "./assignmentsComponent";

import AdminView from "./adminsView";
import CourseView from "./courseView";
import InstructorView from "./instructorView";
import DeleteInstructor from "./deleteInstructor";
import DeleteCourse from "./deleteCourse";
import DeleteAdmin from "./deleteAdmin";

import AddAssignment from "./addAssignment";


import { Route, Link, Switch } from 'react-router-dom';

class Body extends Component {

    render() {
        return (
            <div className="container mt-3">
                <Switch>
                    <Route path="/sign_in" component={SignIn} ></Route>
                    <Route path="/sign_up" component={Signup} ></Route>
                    <Route path="/courses" component={Courses} ></Route>
                    <Route path="/admin_create" component={AdminCreate} ></Route>
                    <Route path="/instructor" component={Instructor} ></Route>
                    <Route path="/assign_instructor" component={AssignInstructor} ></Route>
                    <Route path="/admin_dashboard" component={Admins} ></Route>
                    <Route path="/admin_view" component={AdminView} ></Route>
                    <Route path="/course_view" component={CourseView} ></Route>
                    <Route path="/instructor_view" component={InstructorView} ></Route>
                    <Route path="/course_dashboard" component={CoursesDashboard} ></Route>
                    <Route path="/instructor_dashboard" component={InstructorsDashboard} ></Route>
                    <Route path="/assignments" component={Assignment} ></Route>
                    <Route path="/instructor_delete" component={DeleteInstructor} ></Route>
                    <Route path="/course_delete" component={DeleteCourse} ></Route>
                    <Route path="/admin_delete" component={DeleteAdmin} ></Route>
                    <Route path="/create_assignments" component={AddAssignment} ></Route>
                    <Route exact path="/" component={Home} ></Route>
                </Switch>
            </div>
        );
    }
}

export default Body;
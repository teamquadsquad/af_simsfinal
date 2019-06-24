import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    constructor(props) {

        super(props);

        this.logginButton = null;
        this.courseButton = null;
        this.adminCreate = null;
        this.instructor = null;
        this.assigninstructor = null;
        this.notificationButton = null;
        this.assignmentUpload = null;
        this.studentCourses = null;
        this.state = null;
        this.courseAssignments = null;
        this.instructorCourses = null;

        if(localStorage.getItem('token')){

            this.state = localStorage.getItem('name');
            this.loginButton = <Logout />;

            if(localStorage.getItem('type') == "Admin"){

                this.courseButton = <Course />
                this.adminCreate = <Admin />
                this.instructor = <Instructor />
               //  this.assigninstructor = <AssignInstructor />
            }
            else if(localStorage.getItem('type') == "Student"){

               this.notificationButton = <Notifications />
               this.assignmentUpload = <AssignmentUpload />
               this.studentCourses = <StudentCourses/>
            }

            else if(localStorage.getItem('type') == "Instructor"){

                this.notificationButton = <Notifications />
                this.studentCourses = <InstructorCourses />
                this.assignmentUpload = <CourseAssignments />
            }

        } else {

            this.loginButton = <Login />;
        }
    }
    
    render() {
        const divStyle = {
            'float':'right',
          };
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" >Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item" style={divStyle}>
                                {this.adminCreate}
                            </li>

                            <li className="nav-item ">
                                {this.instructor}
                            </li>
                            <li className="nav-item ">
                                {this.courseButton}
                            </li>
                            
                            <li className="nav-item ">
                                {this.assigninstructor}
                            </li>
                            <li className="nav-item ">
                                {this.notificationButton}
                            </li>
                            <li className="nav-item ">
                                {this.assignmentUpload}
                            </li>
                            
                            <li className="nav-item ">
                                {this.studentCourses}
                            </li>
                            <li className="nav-item" style={divStyle}>
                                {this.loginButton}
                            </li>
                            <li className="nav-item ">
                                {this.instructorCourses}
                            </li>
                            <li className="nav-item ">
                                {this.courseAssignments}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

class Login extends React.Component {

    render() {
       return (
          <div>
             <Link className="nav-link" to="/sign_in">Sign In</Link>
          </div>
       );
    }
 }

 class Logout extends React.Component {

        handleClick(e) {

        e.preventDefault();
        console.log('works');
        localStorage.clear();
        window.location.reload();       

    }
    render() {
       return (
          <div>
             <Link className="nav-link" onClick={this.handleClick} >Sign out</Link>
          </div>
       );
    }
 }

 class Course extends React.Component {

    render() {
       return (
          <div>
             <Link className="nav-link" to="/course_dashboard">Course</Link>
          </div>
       );
    }
 }

 class Admin extends React.Component {

    render() {
       return (
          <div>
             <Link className="nav-link" to="/admin_dashboard">Admin</Link>
          </div>
       );
    }
 }

 class Instructor extends React.Component {

    render() {
       return (
          <div>
             <Link className="nav-link" to="/instructor_dashboard">Instructor</Link>
          </div>
       );
    }
 }

 class AssignInstructor extends React.Component {

    render() {
       return (
          <div>
             <Link className="nav-link" to="/assignInstructor">Assign Instructor</Link>
          </div>
       );
    }
 }

 class Notifications extends React.Component {

   render() {
      return (
         <div>
            <Link className="nav-link" to="/notifications">Notifications</Link>
         </div>
      );
   }
}

class AssignmentUpload extends React.Component {

   render() {
      return (
         <div>
            <Link className="nav-link" to="/assignmentUpload">Assignment Upload</Link>
         </div>
      );
   }
}

class StudentCourses extends React.Component {

   render() {
      return (
         <div>
            <Link className="nav-link" to="/studentCourses">Student Courses</Link>
         </div>
      );
   }
}

class InstructorCourses extends React.Component {

    render() {
        return (
            <div>
                <Link className="nav-link" to="/instructorCourses">Courses</Link>
            </div>
        );
    }
}

class CourseAssignments extends React.Component {

    render() {
        return (
            <div>
                <Link className="nav-link" to="/courseAssignments">Assignments</Link>
            </div>
        );
    }
}

export default NavBar;
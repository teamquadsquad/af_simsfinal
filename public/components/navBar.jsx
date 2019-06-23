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
        this.state = null;
        if(localStorage.getItem('token')){

            this.state = localStorage.getItem('name');
            this.loginButton = <Logout />;

            if(localStorage.getItem('type') == "Admin"){

                this.courseButton = <Course />
                this.adminCreate = <AdminCreate />
                this.instructor = <Instructor />
                this.assigninstructor = <AssignInstructor />
                
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

                            <li className="nav-item" style={divStyle}>
                                {this.loginButton}
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
             <Link className="nav-link" to="/courses">Courses</Link>
          </div>
       );
    }
 }

 class AdminCreate extends React.Component {

    render() {
       return (
          <div>
             <Link className="nav-link" to="/adminCreate">Create Admin</Link>
          </div>
       );
    }
 }

 class Instructor extends React.Component {

    render() {
       return (
          <div>
             <Link className="nav-link" to="/instructor">Instructor</Link>
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
export default NavBar;
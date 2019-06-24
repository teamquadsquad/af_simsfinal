import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            faculty: '',
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {

        e.preventDefault();

        const stdobj = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            faculty: this.state.faculty,
            email: this.state.email,
            password: this.state.password
        };

        axios.post('/api/students', stdobj).then(
            data => {
                console.log('Success ' + data.data);
            }
        );

        this.setState({
            firstname: '',
            lastname: '',
            faculty: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <div className="signup-form">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account!</p>
                        <div className="form-group">
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       placeholder="First Name"
                                       onChange={this.handleInputChange}
                                       value={this.state.firstname}
                                       name="firstname">
                                </input>
                            </div>

                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Last Name"
                                       onChange={this.handleInputChange}
                                       value={this.state.lastname}
                                       name="lastname">
                                </input>
                            </div>

                            <div className="form-group">
                                <select
                                    className="form-control"
                                    name="faculty"
                                    onChange={this.handleInputChange}
                                    value={this.state.faculty}
                                    name="faculty">

                                    <option>IT</option>
                                    <option>Business</option>
                                    <option>Engineering</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Username (Email)"
                                       onChange={this.handleInputChange}
                                       value={this.state.email}
                                       name="email">
                                </input>
                            </div>

                            <div className="form-group">
                                <input type="password"
                                       className="form-control"
                                       placeholder="Password"
                                       onChange={this.handleInputChange}
                                       value={this.state.password}
                                       name="password"
                                       autoComplete="off">
                                </input>
                            </div>

                            <div className="form-group">
                                <input type="password"
                                       className="form-control"
                                       name="confirm_password"
                                       placeholder="Confirm Password"
                                       autoComplete="off">
                                </input>
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
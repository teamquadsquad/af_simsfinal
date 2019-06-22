import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
    render() {
        return (
            <div>
                <div className="signup-form">
                    <form>
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account!</p>
                        <div className="form-group">
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       name="first_name"
                                       placeholder="First Name">
                                </input>
                            </div>

                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       name="last_name"
                                       placeholder="Last Name">
                                </input>
                            </div>

                            <div className="form-group">
                                <select
                                    className="form-control"
                                    name="faculty">

                                    <option value="" disabled selected>Faculty</option>
                                    <option>IT</option>
                                    <option>Business</option>
                                    <option>Engineering</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       name="username"
                                       placeholder="Username (Student Reg. Number)">
                                </input>
                            </div>

                            <div className="form-group">
                                <input type="password"
                                       className="form-control"
                                       name="password"
                                       placeholder="Password">
                                </input>
                            </div>

                            <div className="form-group">
                                <input type="password"
                                       className="form-control"
                                       name="confirm_password"
                                       placeholder="Confirm Password">
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
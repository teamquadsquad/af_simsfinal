import React, {Component} from 'react';

class SignIn extends Component {
    render() {
        return (
            <div>

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text"
                               className="form-control"
                               id="username"
                               placeholder="Enter username">
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password">
                        </input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}

export default SignIn;
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    render() {
        return (

            <div className="text-center">
                <div className="signup-form">

                    <form className="form-signin">
                        <img className="mb-4" src="https://aquaproductsinc.com/wp-content/uploads/2019/02/person.png"
                             alt="" width="72" height="72">
                        </img>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                        <label htmlFor="inputEmail" className="sr-only">Username</label>
                        <input type="text"
                               id="inputusername"
                               className="form-control"
                               placeholder="Username"
                               autoFocus>
                        </input>

                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password"
                               id="inputPassword"
                               className="form-control"
                               placeholder="Password">
                        </input>

                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
                    </form>

                </div>

                <div className="mt-2">
                    <p>Not a registered user?</p>

                    <form action="/sign_up">
                        <button className="btn btn-primary btn-lg" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;
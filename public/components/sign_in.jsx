import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {

    constructor(props) {

        super(props);
        if (localStorage.getItem('token')) {

            console.log('token exist');
            this.props.history.push('/');

        } else {

            this.props.history.push('/sign_in');
        }
        this.state = {
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
        const catobj = {
            Email: this.state.email,
            Password: this.state.password
        };

        axios.post('/api/login', catobj).then(
            data => {

                if (data.data.message == 'success') {

                    console.log('success');
                    console.log(data.data);
                    localStorage.setItem('token', data.data.content.token);
                    localStorage.setItem('id', data.data.content.id);
                    localStorage.setItem('name', data.data.content.name);
                    localStorage.setItem('type', data.data.content.type);
                    console.log('works');
                    this.props.history.push('/');
                    window.location.reload();

                } else {

                    alert(data.data.details);
                }

            }
        ).catch(err => {

            console.log(err);
            alert('Server error');
        });

        this.setState({
            email: '',
            password: ''
        })

    }
    render() {
        return (

            <div className="text-center">
                <div className="signup-form">

                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <img className="mb-4" src="https://aquaproductsinc.com/wp-content/uploads/2019/02/person.png"
                            alt="" width="72" height="72">
                        </img>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                        <label htmlFor="inputEmail" className="sr-only">Username or Email</label>
                        <input type="text"
                            id="inputusername"
                            className="form-control"
                            placeholder="Username"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            name="email"
                            autoFocus>
                        </input>

                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            name="password">
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
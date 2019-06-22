import React, { Component } from 'react';
import axios from 'axios';

class CreateAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            name: '',
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
        const adminobj = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        };

        var token = localStorage.getItem('token');
        console.log(token);

        let headers = {
            headers: {

                'courseweb-access-token': token,
            }
        }

        axios.post('/api/admin', adminobj, headers).then(
            data => {
                console.log('Success ' + data.data);
            }
        );

        this.setState({
            email:'',
            name: '',
            password: ''
        })


    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                            name="name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            name="password"
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateAdmin;
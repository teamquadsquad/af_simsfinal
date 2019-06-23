import React, {Component} from 'react';
import axios from 'axios';

class Instructor extends Component {

    constructor(props) {

        super(props);
        if(localStorage.getItem('token')){

            console.log('token exist');
            
        } else if(localStorage.getItem('type') != "Admin"){

            this.props.history.push('/');
        } else {

            this.props.history.push('/sign_in');         
        }
        this.state = {
            name: '',
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
            Name: this.state.name,
            Email: this.state.email,
            Password: this.state.password
        };
        
        var token = localStorage.getItem('token');
        console.log(token);
        
        let headers = {
            headers: {

              'courseweb-access-token': token,
            }
          }
        axios.post('/api/instructor', catobj, headers).then(
            data => {

                // alert(data.data.message);
                if(data.data.status == 'fail'){

                    alert(data.data.details);
                } else {

                    alert('Successful');
                }
                
                // console.log('Success ' + data.data);
            }
        )
        .catch(err => {

            alert('server error');
        });

        this.setState({
            name: '',
            email: '',
            password: ''
        })

    }
    render() {
        return (
            <div>
                <h1>Create Instructor</h1>
                <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                            name="name"
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            name="email"
                        />
                        <label>Password</label>
                        <input
                            type="password"
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
            </div>
        );
    }
}

export default Instructor;
import React, { Component } from 'react';
import axios from 'axios';

class AdminView extends Component {

    constructor(props) {

        super(props);

        if (localStorage.getItem('token')) {

            console.log('token exist');

        } else if (localStorage.getItem('type') != "Admin") {

            this.props.history.push('/');
        } else {

            this.props.history.push('/sign_in');
        }

        this.state = {
            admin: [{
                _id: '',
                name: '',
                email: '',

            }]
        }
    }
    componentDidMount() {

        var token = localStorage.getItem('token');
        let headers = {
            headers: {

                'courseweb-access-token': token,
            }
        }
        axios.get('/api/admin', headers).then(
            data => {

                if (data.data.status == 'fail') {

                    alert('Admin find fail')
                } else {

                    this.setState({ admin: data.data.content });
                }
            }
        ).catch(err => {

            alert('server error');
        });
    }
    render() {

        return (
            <div>
                <div className="container">
                    <h5 className="card-title">All Admins</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th> <th>Name</th> <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.admin.map((admin) => (

                                <tr>
                                    <td>{admin._id}</td>
                                    <td>{admin.name}</td>
                                    <td>{admin.email}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminView;
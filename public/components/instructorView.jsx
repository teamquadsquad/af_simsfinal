import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class InstructorView extends Component {

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
            instructor: [{
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
        axios.get('/api/instructor', headers).then(
            data => {

                if (data.data.status == 'fail') {

                    alert('Instructors find fail')
                } else {

                    this.setState({ instructor: data.data.content });
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
                    <h5 className="card-title">All Instructors</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th >ID</th> <th >Name</th> <th >Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.instructor.map((instructor) => (

                                <tr>
                                    <td>{instructor._id}</td>
                                    <td>{instructor.name}</td>
                                    <td>{instructor.email}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default InstructorView;
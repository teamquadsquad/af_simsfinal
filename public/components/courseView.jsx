import React, { Component } from 'react';
import axios from 'axios';

class CourseView extends Component {

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
            course: [{
                _id: '',
                name: '',
                description: '',
                instructor: '',

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
        axios.get('/api/course', headers).then(
            data => {

                if (data.data.status == 'fail') {

                    alert('Course find fail')
                } else {

                    this.setState({ course: data.data.content });
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
                    <h5 className="card-title">All Courses</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th> <th>Name</th> <th>Description</th> <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.course.map((course) => (
                                <tr>
                                    <td>{course._id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.description}</td>
                                    <td>{course.instructor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CourseView;
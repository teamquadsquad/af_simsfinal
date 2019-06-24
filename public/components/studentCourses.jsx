import React, {Component} from 'react';
import axios from 'axios';

class StudentCourses extends Component {


    constructor(props) {

        super(props);

        if (localStorage.getItem('token')) {

            console.log('token exist');

        } else if (localStorage.getItem('type') != "Student") {

            this.props.history.push('/');
        } else {

            this.props.history.push('/sign_in');
        }

        this.state = {
            course: [{
                _id: '',
                name: '',

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
        axios.get('/api/course/studentView', headers).then(
            data => {

                if (data.data.status == 'fail') {

                    alert('Course find fail')
                } else {

                    this.setState({ course: data.data.content });
                }
            }
        ).catch(err => {

            console.log(err);
            
            alert('server error');
        });
    }
    render() {

        return (
            <div>
                <div className="container">
                    <h5 className="card-title">Student Courses</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th> <th>Name</th> <th>Enroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.course.map((course) => (

                                <tr>
                                    <td>{course._id}</td>
                                    <td>{course.name}</td>
                                    <td><input type="button" value="ENROLL"/></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default StudentCourses;
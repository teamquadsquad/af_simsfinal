import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class AssignInstructor extends Component {

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

            courses: [{
                label: '',
                value: ''
            }],
            instructors: [{
                label: '',
                value: ''
            }],

            outputs: {

                instructor: '',
                course: ''
            }
        };

        this.handleInputChangeCourse = this.handleInputChangeCourse.bind(this);
        this.handleInputChangeInstructor = this.handleInputChangeInstructor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChangeCourse(e) {

        console.log(e);

        this.setState({

            outputs: { course: e.value, instructor: this.state.outputs.instructor }
        })
    }

    handleInputChangeInstructor(e) {

        console.log(e);

        this.setState({

            outputs: { instructor: e.value, course: this.state.outputs.course  }
        })
    }

    handleSubmit(e) {

        e.preventDefault();

        console.log('instuctor - > ' + this.state.outputs.instructor);
        console.log('course - > ' + this.state.outputs.course);
        
        if (this.state.outputs.instructor != null && this.state.outputs.course != null) {

            const catobj = {

                Instructor: this.state.outputs.instructor,
                Id: this.state.outputs.course
            };

            var token = localStorage.getItem('token');
            console.log(catobj);

            let headers = {
                headers: {

                    'courseweb-access-token': token,
                }
            }
            axios.post('/api/course/assign', catobj, headers).then(
                data => {

                    if (data.data.status == 'fail') {

                        alert(data.data.message);
                    } else {

                        alert('Successful');
                    }
                }
            )
                .catch(err => {

                    alert('server error');
                });

        } else {

            alert('Fields cannot be empty');
        }
    }
    componentDidMount() {

        var token = localStorage.getItem('token');
        let headers = {
            headers: {

                'courseweb-access-token': token,
            }
        }
        axios.get('/api/course/dropDown', headers).then(
            data => {

                if (data.data.status == 'fail') {

                    console.log(data.data);
                } else {

                    // console.log(this.state.courses);
                    this.setState({

                        courses: data.data.content
                    });
                }
                // console.log('Success ' + data.data);
            }
        )
            .catch(err => {

                alert('server error');
            });

        axios.get('/api/instructor/dropDown', headers).then(
            data => {

                if (data.data.status == 'fail') {

                    console.log(data.data);
                } else {

                    this.setState({

                        instructors: data.data.content
                    });
                }
            }
        )
            .catch(err => {

                alert('server error');
            });
    }
    render() {

        return (
            <div>
                <h1>Assign Instructors for Courses</h1>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Courses</label>
                            <Select
                                options={this.state.courses}
                                onChange={this.handleInputChangeCourse}
                            />
                            <label>Instructors</label>
                            <Select options={this.state.instructors}
                                onChange={this.handleInputChangeInstructor}

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

export default AssignInstructor;
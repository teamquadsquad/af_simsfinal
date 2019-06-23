import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class DeleteCourse extends Component {

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

            outputs: {

                course: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {

        console.log(e);

        this.setState({

            outputs: { course: e.value }
        })
    }

    handleSubmit(e) {

        e.preventDefault();

        console.log('course - > ' + this.state.outputs.course);

        if (this.state.outputs.course != null) {

            var id = this.state.outputs.course;

            var token = localStorage.getItem('token');

            let headers = {
                headers: {

                    'courseweb-access-token': token,
                }
            }
            axios.delete('/api/course/' + id , headers).then(
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

        axios.get('/api/course/delDrop', headers).then(
            data => {

                if (data.data.status == 'fail') {

                    console.log(data.data);
                } else {

                    this.setState({

                        course: data.data.content
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
                <h1>Delete Instructors </h1>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">

                            <label>Select course</label>
                            <Select options={this.state.course}
                                onChange={this.handleInputChange}

                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Delete" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default DeleteCourse;
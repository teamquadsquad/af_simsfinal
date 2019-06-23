import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class Instructor extends Component {

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
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {

        console.log(e);

        this.setState(e)
    }

    handleSubmit(e) {

        e.preventDefault();

        console.log(this.state);
        
        const catobj = {
            Instructor: this.state.instructors,
            Id: this.state.courses
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
                // console.log('Success ' + data.data);
            }
        )
            .catch(err => {

                alert('server error');
            });

        this.setState({
        })

    }
    render() {

        var cour = [];
        var instruc = [];
        var token = localStorage.getItem('token');
        let headers = {
            headers: {

                'courseweb-access-token': token,
            }
        }
        axios.get('/api/course', headers).then(
            data => {

                if (data.data.status == 'fail') {

                    cour = [''];
                } else {

                    cour = data.data.content;
                    console.log(cour);
                }
                // console.log('Success ' + data.data);
            }
        )
            .catch(err => {

                alert('server error');
            });

            axios.get('/api/instructor', headers).then(
                data => {
    
                    if (data.data.status == 'fail') {
    
                        instruc = [''];
                    } else {
    
                        instruc = data.data.content;
                        console.log(instruc);
                    }
                    // console.log('Success ' + data.data);
                }
            )
                .catch(err => {
    
                    alert('server error');
                });
        const instructors = [
            { label: "AppleI", value: "5d0ea946285ab61bc0a48f2e" },
            { label: "Facebook", value: 2 },
            { label: "Netflix", value: 3 },
            { label: "Tesla", value: 4 },
            { label: "Amazon", value: 5 },
            { label: "Alphabet", value: 6 },
        ];
        return (
            <div>
                <h1>Assign Instructors for Courses</h1>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Courses</label>
                            <Select
                                options={cour}
                                onChange={this.handleInputChange}
                            />
                            <label>Instructors</label>
                            <Select options={instructors}
                                onChange={this.handleInputChange}
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
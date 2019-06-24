import React, {Component} from 'react';
import axios from "axios";

class AddAssignment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assignmentName: '',
            moduleName: '',
            toBeSubmittedBy: '',
            isOverdue: false,
            file: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // //upload files
    // handleUpload = (e, assignmentId,assignmentName,moduleName) => {
    //     const files = Array.from(e.target.files);
    //     const formData = new FormData();
    //
    //     files.forEach((file) => {
    //         formData.append("file", file);
    //         formData.append("submittedBy", this.state.user.firstName + " " + this.state.user.lastName);
    //         formData.append("assignmentName",assignmentName);
    //         formData.append("moduleName",moduleName);
    //     });
    //
    //     fetch('/api/files/upload/' + assignmentId, {
    //
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //
    //         },
    //         method: 'POST',
    //         body: formData,
    //
    //     })
    //         .then(res => res.json())
    //         .then(response => {
    //             window.location.replace('/student/');
    //         }).catch(error => {
    //         this.setState({
    //         })
    //     })
    //
    //
    // };

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const assignmentObj = {
            assignmentName: this.state.assignmentName,
            moduleName: this.state.moduleName,
            toBeSubmittedBy: this.state.toBeSubmittedBy,
            isOverdue: this.state.isOverdue,
            file: this.state.file
        };

        var token = localStorage.getItem('token');
        console.log(token);

        let headers = {
            headers: {
                'courseweb-access-token': token,
            }
        };
        // axios.post('/api/assignments', assignmentObj, headers).then(
        axios.post('/api/assignments', assignmentObj).then(
            data => {

                // alert(data.data.message);
                if (data.data.status == 'fail') {
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
            assignmentName: '',
            moduleName: '',
            toBeSubmittedBy: '',
            isOverdue: false,
            file: ''
        })

    }

    render() {
        return (
            <div>
                <h1>Create Assignment</h1>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Assignment Name</label>
                            <input
                                type="text"
                                className="form-control mb-1"
                                onChange={this.handleInputChange}
                                value={this.state.assignmentName}
                                name="assignmentName"
                            />
                            <label>Module Name</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.handleInputChange}
                                value={this.state.moduleName}
                                name="moduleName"
                            />
                            <label>To Be Submitted Before</label>
                            <input
                                type="date"
                                className="form-control"
                                onChange={this.handleInputChange}
                                value={this.state.toBeSubmittedBy}
                                name="toBeSubmittedBy"
                            />
                            <label>Is Overdue</label>
                            <input
                                type="boolean"
                                className="form-control"
                                onChange={this.handleInputChange}
                                value={this.state.isOverdue}
                                name="isOverdue"
                            />
                            <label>File</label>
                            <input
                                type="file"
                                className="form-control"
                                // onChange={this.handleInputChange}
                                value={this.state.file}
                                name="file"
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddAssignment;
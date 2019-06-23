import React, {Component} from 'react';
import axios from 'axios';

class CourseAssignments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assignments: []
        }
    }

    componentDidMount() {
        axios.get('/api/assignments').then(
            data => {
                this.setState({
                    assignments: data.data
                })
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Assignments</h1>
                <div className="mb-5">
                    <form action="/collectAssignments">
                        <button className="btn btn-primary btn-lg" type="submit">Collect Submissions</button>
                    </form>
                </div>

                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Assignment Name</th>
                            <th>Course Name</th>
                            <th>Due Date</th>
                            <th>File</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.assignments.map(assignment => {
                                return (
                                    <tr key={assignment._id}>
                                        <td>{assignment.assignmentName}</td>
                                        <td>{assignment.moduleName}</td>
                                        <td>{assignment.toBeSubmittedBy}</td>
                                        <td>
                                            <form action={assignment.file}>
                                                <button type="submit" className="btn btn-primary">View Assignment</button>
                                            </form>
                                        </td>
                                        <td>
                                            <form >
                                                <button className="btn btn-primary btn-lg" type="submit">Edit Due Date</button>
                                            </form>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <div>eer</div>
            </div>
        );
    }
}

export default CourseAssignments;
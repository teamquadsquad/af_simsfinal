import React, {Component} from 'react';
import axios from 'axios';

class AssignmentsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: [{
                assignmentName: "sdf",
                moduleName: "sdf",
                toBeSubmittedBy: "2302-23-23",
                isOverdue: false,
                file: "uploadsInstructor/0.541574522513887keyboard-shortcuts-windows.pdf"
            }]
            // assignments: [{
            //     assignmentName: '',
            //     moduleName: '',
            //     toBeSubmittedBy: '',
            //     isOverdue: false,
            //     file: '',
            //     fields: {},
            //     errors: {}
            // }]
        }
    }



    // componentDidMount() {
    //     axios.get('/api/assignments').then(
    //         data => {
    //             this.setState({
    //                 assignments: data.data
    //             })
    //         }
    //     )
    // }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Assignment Name</th>
                        <th>Module Name</th>
                        <th>Date to be submitted by</th>
                        <th>Overdue</th>
                        <th>File</th>
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
                                    <td>{assignment.isOverdue.toString()}</td>
                                    {/*<td>{assignment.file}</td>*/}
                                    <td>
                                        <form action={assignment.file}>
                                            <button type="submit" className="btn btn-primary">Download</button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AssignmentsComponent;
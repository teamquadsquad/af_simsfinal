import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Instructors extends Component {
    render() {
        return (
            <div>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">View All Instructors</h5>
                        <p className="card-text"></p>
                        <Link to="/admin/view" className="btn btn-primary">View</Link>
                    </div>
                </div>

                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Create Instructor</h5>
                        <p className="card-text"></p>
                        <Link to="/instructor" className="btn btn-primary">Create</Link>
                    </div>
                </div>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Assign Instructor to Courses</h5>
                        <p className="card-text"></p>
                        <Link to="/assignInstructor" className="btn btn-primary">Assign</Link>
                    </div>
                </div>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Delete Instructors</h5>
                        <p className="card-text"></p>
                        <Link to="/admin/delete" className="btn btn-primary">Delete</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Instructors;
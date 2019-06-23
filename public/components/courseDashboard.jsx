import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CoursesDashboard extends Component {
    render() {
        return (
            <div>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">View All Courses</h5>
                        <p className="card-text"></p>
                        <Link to="/course_view" className="btn btn-primary">View</Link>
                    </div>
                </div>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Create Course</h5>
                        <p className="card-text"></p>
                        <Link to="/courses" className="btn btn-primary">Create</Link>
                    </div>
                </div>
                
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Delete Courses</h5>
                        <p className="card-text"></p>
                        <Link to="/course_delete" className="btn btn-primary">Delete</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursesDashboard;
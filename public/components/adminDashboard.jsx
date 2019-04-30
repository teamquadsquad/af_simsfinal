import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Admins extends Component {
    render() {
        return (
            <div>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">View All Administrators</h5>
                        <p className="card-text"></p>
                        <Link to="/admin/view" className="btn btn-primary">View</Link>
                    </div>
                </div>

                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Create Administrator</h5>
                        <p className="card-text"></p>
                        <Link to="/adminCreate" className="btn btn-primary">Create</Link>
                    </div>
                </div>
                
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Delete Administrator</h5>
                        <p className="card-text"></p>
                        <Link to="/admin/delete" className="btn btn-primary">Delete</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admins;
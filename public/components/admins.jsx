import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Admins extends Component {
    render() {
        return (
            <div>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Add Administrator</h5>
                        <p className="card-text"></p>
                        <Link to="/admin/create" className="btn btn-primary">Add</Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Admins;
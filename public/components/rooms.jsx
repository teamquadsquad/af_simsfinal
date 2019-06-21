import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Rooms extends Component {
    render() {
        return (
            <div>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">View All Rooms</h5>
                        <p className="card-text"></p>
                        <Link to="/rooms/viewAll" className="btn btn-primary">View All</Link>
                    </div>
                </div>

                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Add Rooms</h5>
                        <p className="card-text"></p>
                        <Link to="/rooms/add" className="btn btn-primary">Add</Link>
                    </div>
                </div>

                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">View Rooms By Category</h5>
                        <p className="card-text"></p>
                        <Link to="#" className="btn btn-primary">View</Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Rooms;
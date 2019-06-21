import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
    render() {
        return (
            <div>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">View All Categories</h5>
                        <p className="card-text"></p>
                        <Link to="/category/viewAllCat" className="btn btn-primary">View</Link>
                    </div>
                </div>

                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Add Category</h5>
                        <p className="card-text"></p>
                        <Link to="/category/add" className="btn btn-primary">Add</Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Categories;
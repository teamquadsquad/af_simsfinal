import React, { Component } from 'react';
import axios from 'axios';

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const catobj = {
            name: this.state.name,
            description: this.state.description
        };

        axios.post('/api/categories/add', catobj).then(
            data => {
                console.log('Success ' + data.data);
            }
        );

        this.setState({
            name: '',
            description: ''
        })


    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                            name="name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                            name="description"
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddCategory;
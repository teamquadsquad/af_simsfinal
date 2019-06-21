import React, { Component } from 'react';
import axios from 'axios';

class AddRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            amount: '',
            wing: '',
            pax: '',
            categories: [],
            category: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        axios.get('/api/categories').then(
            data => {
                this.setState({
                    categories: data.data
                })
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();

        const roomobj = {
            code: this.state.code,
            amount: this.state.amount,
            wing: this.state.wing,
            pax: this.state.pax,
            category: this.state.category
        };

        axios.post('/api/rooms/add', roomobj).then(
            data => {
                console.log('Success ' + data.data);
            }
        );

        this.setState({
            code: '',
            amount: '',
            wing: '',
            pax: '',
            category: ''
        })
    }

    render() {
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Code</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.code}
                            name="code"
                        />
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.amount}
                            name="amount"
                        />
                    </div>

                    <div className="form-group">
                        <label>Wing</label>
                        <select
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.wing}
                            name="wing">

                            <option>West</option>
                            <option>East</option>
                            <option>North</option>
                            <option>South</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Pax</label>
                        <select
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.pax}
                            name="pax">

                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={this.handleInputChange} value={this.state.category}>
                            {
                                this.state.categories.map(cat => {
                                    return (
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </div>


        )
    }
}

export default AddRoom;
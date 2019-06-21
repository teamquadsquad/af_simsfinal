import React, { Component } from 'react';
import axios from 'axios';

class ViewAllCat extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            rooms: []
        }
    }

    componentDidMount(){
        axios.get('/api/categories').then(
            data => {
                this.setState({
                    categories: data.data
                })
            }
        )
    }

    findRooms(id){
        axios.get('/api/rooms' + id).then(
            dataSet => {
                alert('Rooms : ' + dataSet.data.code );
            }
        )
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rooms</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.categories.map( cat => {
                            return (
                                <tr key={cat._id}>
                                    <td>{cat.name}</td>
                                    <td>{cat.description}</td>
                                    <td><button className="btn btn-primary" onClick = {this.findRooms.bind(this,cat.rooms)}>Rooms</button></td>
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

export default ViewAllCat;
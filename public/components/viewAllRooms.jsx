import React, { Component } from 'react';
import axios from 'axios';

class ViewAllRooms extends Component {
    constructor(props){
        super(props);
        this.state = {
            rooms: [],
            categories: [],
        }
    }

    componentDidMount(){
        axios.get('/api/rooms').then(
            data => {
                this.setState({
                    rooms: data.data
                })
            }
        )
    }

    findCat(id){
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
                            <th>Code</th>
                            <th>Amount</th>
                            <th>Wing</th>
                            <th>Pax</th>
                            <th>Categories</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.rooms.map( roo => {
                            return (
                                <tr key={roo._id}>
                                    <td>{roo.code}</td>
                                    <td>{roo.amount}</td>
                                    <td>{roo.wing}</td>
                                    <td>{roo.pax}</td>
                                    <td><button className="btn btn-primary" onClick = {this.findCat.bind(this,roo._id)}>Categories</button></td>
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

export default ViewAllRooms;
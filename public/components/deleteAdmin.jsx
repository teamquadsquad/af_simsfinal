import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

class DeleteAdmin extends Component {

    constructor(props) {

        super(props);
        if (localStorage.getItem('token')) {

            console.log('token exist');

        } else if (localStorage.getItem('type') != "Admin") {

            this.props.history.push('/');
        } else {

            this.props.history.push('/sign_in');
        }
        this.state = {

            admin: [{
                label: '',
                value: ''
            }],

            outputs: {

                admin: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {

        console.log(e);

        this.setState({

            outputs: { admin: e.value }
        })
    }

    handleSubmit(e) {

        e.preventDefault();

        console.log('admin - > ' + this.state.outputs.admin);

        if (this.state.outputs.admin != null) {

            var id = this.state.outputs.admin;

            var token = localStorage.getItem('token');

            let headers = {
                headers: {

                    'courseweb-access-token': token,
                }
            }
            axios.delete('/api/admin/' + id , headers).then(
                data => {

                    if (data.data.status == 'fail') {

                        alert(data.data.message);
                    } else {

                        alert('Successful');
                    }
                }
            )
                .catch(err => {

                    alert('server error');
                });

        } else {

            alert('Fields cannot be empty');
        }
    }
    componentDidMount() {

        var token = localStorage.getItem('token');
        let headers = {
            headers: {

                'courseweb-access-token': token,
            }
        }

        axios.get('/api/admin/delDrop', headers).then(
            data => {

                if (data.data.status == 'fail') {

                    console.log(data.data);
                } else {

                    this.setState({

                        admin: data.data.content
                    });
                }
            }
        )
            .catch(err => {

                alert('server error');
            });
    }
    render() {

        return (
            <div>
                <h1>Delete Admin </h1>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">

                            <label>Select admin</label>
                            <Select options={this.state.admin}
                                onChange={this.handleInputChange}

                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Delete" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default DeleteAdmin;